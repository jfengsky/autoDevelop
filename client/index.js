import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import layout from '../views/layout'
import App from '../src/component/App'
import initialState from '../src/store/initialState'
import { clientPort } from '../build/client.config'

import pageTypeRoute from '../routes/pageType'
import pageInfoRoute from '../routes/pageInfo'
import apiInfoRoute from '../routes/apiInfo'
import apiCodeInfoRoute from '../routes/apiCodeInfo'

import {
  pageList,
  apiList,
  pageType,
  pageInfo,
  apiInfo,
  apiCodeInfo
} from '../routes/api'

const app = express()
const upload = multer()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/static', express.static('./dist'))
app.use(express.static('./public'))
app.use('/static', express.static('./node_modules'))

app.get('*', (req, res) => {
  let hasMatchUrl = false
  pageList.filter(item => {
    if(item === '/'){
      hasMatchUrl = true
    } else if( req.path.indexOf(item + '/') >= 0){
      hasMatchUrl = true
    }
  })
  if (hasMatchUrl) {
    res.send(layout({ title: 'client', content: '', __INITSTATE__: initialState }))
  } else {
    res.sendStatus('404')
  }
})

// 通用成功返回默认信息
const successData = {state:0, data: null}

app.post('*', async (req, res) => {
  if (apiList.indexOf(req.path) >= 0) {
    // todo switch接口
    let sendData = {}
    switch(req.path) {
      case pageType:
        sendData = await pageTypeRoute(req)
        res.send(Object.assign({},successData, sendData))
        break;
      case pageInfo:
        sendData = await pageInfoRoute(req)
        res.send(Object.assign({},successData, sendData))
        break
      case apiInfo:
        sendData = await apiInfoRoute(req)
        res.send(Object.assign({},successData, sendData))
        break
      case apiCodeInfo:
        sendData = await apiCodeInfoRoute(req)
        res.send(Object.assign({},successData, sendData))
        break
      default:
        break;
    }
    // res.send(Object.assign({},successData, sendData))
  } else {
    res.sendStatus('404')
  }
})

app.listen(clientPort, () => console.log(`start client: http://localhost:${clientPort}`))