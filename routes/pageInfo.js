import DB from '../db/pageInfo'

import file from '../db/fsPageInfo'

export default req => {
  let {
    type,
    name,
    code,
    kind,
    desc,
    id
  } = req.body
  switch (type) {
    case 'save':
      return file.write({
        name,
        code
      }).then( async _data => {
        await DB.save({
          name,
          kind,
          desc
        }).then(_data => {
          return {
            data: _data.ops[0]
          }
        })
      })
    case 'search':
      return DB.search({id}).then( _data => {
        return {
          data: _data
        }
      })
    case 'searchfile':
      return DB.search({id}).then( async _data => {
        let tempData = _data[0]
        return await file.read({
          name: tempData.name
        }).then( result => {
          return {
            data: {
              ...tempData,
              code: result
            }
          }
        })
      })
    case 'updata':
      // TODO
      return file.write({
        name,
        code
      }).then( async _data => {
        await DB.updata({
          name,
          kind,
          desc,
          id
        }).then(_data => {
          return {
            data: _data.ops[0]
          }
        })
      })
    case 'delete':
      return DB.delete({id}).then( _data => {
        return {
          data: _data
        }
      })
    default:
      break
  }
}