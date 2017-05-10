import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'

import layout from '../views/layout'
import App from '../src/component/App'
import initialState from '../src/store/initialState'
import { clientPort } from '../build/client.config'


const app = express()
app.use('/static', express.static('./dist'))
app.use('/static', express.static('./node_modules'))

app.get('*', (req, res) => {
  res.send(layout({title: 'client', content: '', __INITSTATE__:initialState}))
})

app.listen(clientPort, ()=> console.log(`start client: http://localhost:${clientPort}`))