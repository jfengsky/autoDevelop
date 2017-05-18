import React, {Component, PropTypes} from 'react'

import {connect} from 'react-redux'

class ApiList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h5 className="modal-title">所有接口列表</h5>
        <div className="row">
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
      </div>
    )
  }
}

ApiList.propTypes = {}

const mapStateToProps = state => ({...state})

export default connect(mapStateToProps)(ApiList)
