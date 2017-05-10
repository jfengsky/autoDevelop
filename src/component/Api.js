import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

class Api extends Component {
  render() {
    return <div>Api2</div>
  }
}

Api.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  }
}
export default connect(mapStateToProps)(Api)
