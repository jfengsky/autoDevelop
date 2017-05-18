import { MongoClient, URL } from './dbConfig'

const colName = 'apiCodeInfo'

export default {
  save({ name, pageType, kind, desc }) {
    return new Promise((resolve, reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        let id = 0
        collection.find({}).toArray((searchErr, result) => {
          if (result.length) {
            id = result[result.length - 1].id + 1
          }
          collection.insert({ name, id, kind, pageType, desc, time: new Date().getTime() }, (inerr, docs) => {
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
  update({id, desc}) {
    return new Promise( (resolve,reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        let where = {}
        if(id >= 0){
          where = {id: id - 0}
        }
        collection.update(where,{$set:{desc}}, (inerr, docs) => {
          resolve(docs)
          db.close()
        })
      })
    })
  },
  delete({id}){
    return new Promise( (resolve,reject) => {
      MongoClient.connect(URL, (err, db) => {
        const collection = db.collection(colName)
        collection.remove({id}, (inerr, docs) => {
          resolve(docs)
          db.close()
        })
      })
    })
  }
}