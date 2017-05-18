import DB from '../db/apiCodeInfo'

import file from '../db/fsApiCode'

export default req => {
  let {
    type,
    pageType,
    kind,
    desc,
    code,
    id,
    name
  } = req.body
  switch(type) {
    case 'save':
      return file.write({code}).then( async _data => {
        return await DB.save({name: _data.name, pageType, kind, desc}).then( result => {
          return {
            data: result.ops[0]
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
    case 'update':
      return file.write({name,code}).then( result => {
        return DB.update({id, desc}).then(_data => {
          return {
            data: _data
          }
        })
      })
    case 'delete':
      return DB.delete({id}).then(_data => {
        return {
          data: _data
        }
      })
  }
}