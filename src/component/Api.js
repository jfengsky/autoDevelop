import React, {Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
// import {connect} from 'react-redux'

import ApiList from './apiType/ApiList'
import CreateApi from './apiType/CreateApi'
import CreateApiType from './apiType/ApiModify'

const RouterApi = ({match}) => {
  let {
    type,
    id,
  } = match.params
  switch (type) {
    case 'apiTypeModify':
      return <CreateApiType id={id} />
    default:
      return <CreateApi id={id} />
  }
}

const Api = ({match}) => (
  <Switch>
    <Route exact path={match.url} component={ApiList} />
    <Route path={`${match.url}/:type/:id`} component={RouterApi} />
    <Route path={`${match.url}/:type`} component={RouterApi} />
  </Switch>
)

Api.propTypes = {}

export default Api
