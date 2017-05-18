import DB from '../db/apiInfo'

export default req => {
  let {
    type,
    name,
    method,
    kind,
    desc,
    id
  } = req.body
  switch(type) {
    case 'save':
      return DB.save({name, method, kind, desc}).then( _data => {
        return {
          data: _data.ops[0]
        }
      })
    case 'search':
      return DB.search({id}).then( _data => {
        return {
          data: _data
        }
      })
    case 'update':
      return DB.update({id, method, kind, desc}).then(_data => {
        return {
          data: _data
        }
      })
    case 'delete':
      return DB.delete({id}).then(_data => {
        return {
          data: _data
        }
      })
  }
}