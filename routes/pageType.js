import DB from '../db/pageType'

export default req => {
  let {
    type,
    text
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
    default:
      break
  }
}