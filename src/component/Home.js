import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {FETCH_PAGETYPE} from '../store/fetch'
import {updata_pageType} from '../action/pageType'

class Home extends Component {
  componentDidMount() {
    // 异步获取页面类型
    FETCH_PAGETYPE({
      type: 'search',
    }).then(data => {
      this.props.updataPageType(data.data)
    })
  }

  render() {
    return (
      <div>
        <h3>home</h3>
      </div>
    )
  }
}

Home.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updataPageType: data => {
      dispatch(updata_pageType(data))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
