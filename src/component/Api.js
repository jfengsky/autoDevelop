import React, {Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

import ApiList from './apiType/ApiList'
import CreateApi from './apiType/CreateApi'
import CreateApiType from './apiType/ApiModify'

const RouterApi = ({match}) => {
  switch (match.params.type) {
    case 'apiTypeModify':
      return <CreateApiType />
    default:
      return <CreateApi />
  }
}

const Api = ({match}) => (
  <Switch>
    <Route exact path={match.url} component={ApiList} />
    <Route path={`${match.url}/:type`} component={RouterApi} />
  </Switch>
)

Api.propTypes = {}

export default Api
