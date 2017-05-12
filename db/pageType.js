import { MongoClient, URL } from './dbConfig'

const colName = 'pageType'

export default {
  save({ name }) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        // TODO
        const collection = db.collection(colName)
        let id = 0
        // 实现自增id，查询最后一个，然后把id+1
        collection.find({}).toArray((searchErr, result) => {
          // console.log(result)
          if (result.length) {
            id = result[result.length - 1].id + 1
          }

          collection.insert({ name, id }, (inerr, docs) => {
            resolve(docs)
            db.close()
          })

        })
      })
    })
  }
}