import React, {Component, PropTypes} from 'react'

class CreateApi extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h5 className="modal-title">创建接口模板</h5>
        <div className="row">
          <div className="col-xs-12">
            <select
              className="form-control"
              onChange={e => {
                this.setState({type: e.target.value})
              }}
              value={this.props.type}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="请输入接口描述"
              value={this.props.name}
              onChange={e => {
                this.setState({name: e.target.value})
              }}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <textarea
              className="form-control"
              ref="pageCode"
              rows="20"
              placeholder="请粘贴页面源代码"
              value={this.props.code}
              onChange={this.handlerChangeCode}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlerClickCreagePage}
            >
              创建
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handlerClickCreagePage}
            >
              编辑
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.handlerClickCreagePage}
              style={{marginLeft: 20}}
            >
              删除
            </button>
          </div>
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

CreateApi.propTypes = {}

export default CreateApi
