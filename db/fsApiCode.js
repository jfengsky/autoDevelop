import fs from 'fs'
import path from 'path'

const file = {
    read({name}){
        return new Promise((resolve, reject) => {
            fs.readFile(`./public/apis/${name}.json`, 'utf-8', (err, data) => {
                resolve(data)
            })
        })
    },
    write({name,code}){
        // 随机生成一个英文名，这里用时间毫秒
        if(!name){
          name = 'api' + new Date().getTime()
        }
        return new Promise((resolve,reject) => {
            fs.writeFile(`./public/apis/${name}.json`, decodeURIComponent(code), 'utf-8', err => {
                if(err){
                    reject(err)
                } else {
                    resolve({name})
                }
            })
        })
    }
}

export default file