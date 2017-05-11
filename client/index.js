import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'

import layout from '../views/layout'
import App from '../src/component/App'
import initialState from '../src/store/initialState'
import { clientPort } from '../build/client.config'

import { pageList, apiList } from '../routes/api'

const app = express()
app.use('/static', express.static('./dist'))
app.use('/static', express.static('./node_modules'))

app.get('*', (req, res) => {
  if(pageList.indexOf(req.path) >= 0){
    res.send(layout({title: 'client', content: '', __INITSTATE__:initialState}))
  } else {
    res.sendStatus('404')
  }
})

app.post('*', (req, res) => {
  
  if(apiList.indexOf(req.path) >= 0){
    // todo switch接口
    res.sendStatus('200')
  } else {
    res.sendStatus('404')
  }
})

app.listen(clientPort, ()=> console.log(`start client: http://localhost:${clientPort}`))