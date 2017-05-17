import DB from '../db/apiInfo'

export default req => {
  let {
    type,
    name,
    method,
    kind,
    id
  } = req.body
  switch(type) {
    case 'save':
      return DB.save({name, method, kind}).then( _data => {
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
      return DB.update({id, method, kind}).then(_data => {
        return {
          data: _data
        }
      })
  }
}