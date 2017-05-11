import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import express from 'express'
import { createStore, combineReducers} from 'redux'
import { Provider } from 'react-redux'

import layout from '../views/layout'
import { serverPort } from '../build/server.config'
import reducer from '../src/reducer'
import initialState from '../src/store/initialState'
import App from '../src/component/App'

const store = createStore(reducer)
const app = express()
app.use('/static', express.static('./dist'))
app.use('/static', express.static('./node_modules'))

app.get('*', (req, res) => {
  console.log(req)
  const context = {}
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  if(context.url){
    res.writeHead(301, {
      Location: context.url
    })
  } else {
    res.send(layout({title: 'server', content: html, __INITSTATE__:initialState}))
  }
})
app.listen(serverPort, ()=> console.log(`start server: http://localhost:${serverPort}`))