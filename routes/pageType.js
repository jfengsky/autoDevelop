import DB from '../db/pageType'

export default req => {
  let {
    type,
    text
  } = req.body
  switch(type){
    case 'save':
    return DB.save({
      name:text
    }).then( _data => {
      console.log(_data)
      return _data
    })
    default:
    break
  }

}