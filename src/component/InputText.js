import React, {Component, PropTypes} from 'react'

export default class InputText extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // error: false
      text: '',
    }
  }

  render() {
    // let { error } = this.state
    let {error} = this.props
    return (
      <div className={`form-group ${error ? ' has-error has-feedback' : ''}`}>
        <input
          type="text"
          ref="pageTypeValue"
          className="form-control"
          placeholder="请输入页面类型"
        />
        <span
          className="glyphicon glyphicon-remove form-control-feedback"
          style={{right: 10, display: error ? '' : 'none'}}
        />
      </div>
    )
  }
}

InputText.propTypes = {}
