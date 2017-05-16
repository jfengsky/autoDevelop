import DB from '../db/pageType'

export default req => {
  let {
    type,
    text,
    id
  } = req.body
  switch (type) {
    case 'save':
      return DB.save({
        name: text
      }).then(_data => {
        return {
          data: _data.ops[0]
        }
      })
    case 'search':
      return DB.search().then( _data => {
        return {
          data: _data
        }
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