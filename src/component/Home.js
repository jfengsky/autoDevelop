import React, {Component, PropTypes} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import CreatePage from './pageType/CreatePage'
import ModifyPageType from './pageType/Modify'
import PageList from './pageLis'

// TODO 这个模块的路由需要优化一下

const pageTypeSwitch = match => {
  return <CreatePage id={match.params.id} />
}

const CreatePageSplit = ({match}) => {
  let pageComponent = CreatePage
  if (match.params.pagetype === 'pageTypeModify') {
    pageComponent = ModifyPageType
  }
  return (
    <div>
      <Route exact path={match.url} component={pageComponent} />
      <Route
        path={`${match.url}/:id`}
        render={({match}) => pageTypeSwitch(match)}
      />
    </div>
  )
}

const Home = ({match}) => {
  return (
    <div>
      <Route exact path={match.url} component={PageList} />
      <Route path={`${match.url}/:pagetype`} component={CreatePageSplit} />
    </div>
  )
}

export default Home
