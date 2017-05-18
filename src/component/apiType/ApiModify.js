import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import ApiTypeList from './ApiTypeList';
import {FETCH_APIINFO} from '../../store/fetch';

class CreateApiType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isUpdata: false,
      type: 0,
      method: 'post',
      errorMessage: '',
    };
  }

  render() {
    let {
      name,
      isUpdata,
      type,
      method,
      errorMessage,
    } = this.state;
    if (name) {
      errorMessage = '';
    }
    return (
      <div>
        <h5 className="modal-title">创建接口类型</h5>
        <div className="row">
          <div className="col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="请输入接路径"
              value={name}
              onChange={e => {
                this.setState({name: e.target.value});
              }}
              readOnly={isUpdata ? true : false}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <label>
              <input
                type="radio"
                name="optionsRadios"
                value="post"
                checked={method === 'post' ? true : false}
                onChange={e => {
                  this.setState({method: e.target.value});
                }}
              /> POST
            </label>
            <label style={{marginLeft: 10}}>
              <input
                type="radio"
                name="optionsRadios"
                value="get"
                checked={method === 'get' ? true : false}
                onChange={e => {
                  this.setState({method: e.target.value});
                }}
              /> GET
            </label>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <select
              className="form-control"
              onChange={e => {
                this.setState({type: e.target.value});
              }}
              value={type}
            >
              {this.props.pageTypeList.map(({name, id}) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            {!isUpdata &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickCreageApiType}
              >
                创建
              </button>}
            {isUpdata &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickCreageApiType}
              >
                编辑
              </button>}
            {isUpdata &&
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handlerClickDeleteApiType}
                style={{marginLeft: 20}}
              >
                删除
              </button>}
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div
            className="col-xs-12"
            style={{display: errorMessage ? 'block' : 'none'}}
          >
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          </div>
        </div>
        <ApiTypeList
          apiModify={this.apiModify}
          pageTypeList={this.props.pageTypeList}
        />
      </div>
    );
  }

  apiModify = ({name, method, kind, id}) => {
    this.setState({
      name,
      method,
      type: kind,
      isUpdata: true,
      id,
    });
  };

  handlerClickCreageApiType = e => {
    let {
      name,
      type,
      method,
      id,
    } = this.state;

    let modifyType = 'save';
    if (id >= 0) {
      modifyType = 'update';
    }

    if (!name) {
      this.setState({
        errorMessage: '输入api路径',
      });
    } else {
      FETCH_APIINFO({
        type: modifyType,
        method,
        name,
        kind: type,
        id,
      }).then(_data => {
        window.location.reload();
      });
    }
  };

  handlerClickDeleteApiType = e => {
    FETCH_APIINFO({
      type: 'delete',
      id: this.state.id,
    }).then(_data => {
      window.location.reload();
    });
  };
}

CreateApiType.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps)(CreateApiType);
