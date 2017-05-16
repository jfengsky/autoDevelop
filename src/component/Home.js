import React, {Component, PropTypes} from 'react'
// import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// import {FETCH_PAGETYPE} from '../store/fetch'
// import {updata_pageType} from '../action/pageType'

import CreatePage from './pageType/CreatePage'
import ModifyPageType from './pageType/Modify'
import PageList from './pageLis'

// const pageTypeSwitch = match => {
//   switch (match.params.pagetype) {
//     case 'createPage':
//       return <CreatePage />
//     case 'pageTypeModify':
//       return <ModifyPageType />
//     default:
//       return <div>default</div>
//   }
// }

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

/*const Home = ({match}) => {
  return (
    <div>
      <Route exact path={match.url} component={PageList} />
      <Route
        path={`${match.url}/:pagetype`}
        render={({match}) => pageTypeSwitch(match)}
      />
    </div>
  )
}*/

export default Home
