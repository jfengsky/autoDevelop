import { MongoClient, URL } from './dbConfig'

const colName = 'pageInfo'

export default {
  save({ name, kind, desc }) {
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
          collection.insert({ name, id, kind, desc, time: new Date().getTime() }, (inerr, docs) => {
            resolve(docs)
            db.close()
          })
        })
      })
    })
  },

  search({id}) {
    return new Promise( (resolve,reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        let where = {}
        if(id >= 0){
          where = {id: id - 0}
        }
        collection.find(where).toArray((searchErr, result) => {
          if (searchErr) {
            reject(`search error`)
          } else {
            resolve(result)
          }
          db.close()
        })
      })
    })
  },

  updata({id, name, kind, desc}) {
    return new Promise( (resolve,reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
      })
    })
  },

  delete({id}) {
    // TODO
    return new Promise((resolve,reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.remove({id}, (delErr, result) => {
          if(delErr){
              reject(`delete pageType error`)
          } else {
              resolve(result)
          }
          db.close()
        })
      })
    })
  }
}