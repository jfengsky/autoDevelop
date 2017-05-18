import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {FETCH_APICODEINFO} from '../../store/fetch';

class CreateApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 0,
      kind: 0,
      desc: '',
      code: '',
      name: '',
      id: props.id,
      isUpdate: false,
    };
  }

  componentDidMount() {
    let {id} = this.props;
    if (id >= 0) {
      FETCH_APICODEINFO({
        type: 'searchfile',
        id,
      }).then(data => {
        let {
          pageType,
          desc,
          code,
          kind,
          name,
        } = data.data;
        this.setState({
          pageType,
          desc,
          code,
          kind,
          name,
          isUpdate: true,
        });
      });
    }
  }

  render() {
    let {
      pageType,
      kind,
      desc,
      code,
      id,
      isUpdate,
    } = this.state;

    let {
      pageTypeList,
      apiTypeList,
    } = this.props;

    let isModify = id >= 0 ? true : false;

    // 根据页面类型筛选该页面的接口
    let apiList = [];
    apiTypeList.map(item => {
      if (item.kind - 0 === pageType - 0) {
        apiList.push(item);
      }
    });

    return (
      <div>
        <h5 className="modal-title">创建接口模板</h5>
        <div className="row">
          <div className="col-xs-12">
            <select
              className="form-control"
              onChange={e => {
                this.setState({pageType: e.target.value - 0});
              }}
              value={pageType}
              readOnly={isUpdate}
            >
              {pageTypeList.map(({id, name}) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <select
              className="form-control"
              onChange={e => {
                this.setState({kind: e.target.value - 0});
              }}
              value={kind}
              readOnly={isUpdate}
            >
              {apiList.map(({id, name}) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <input
              type="text"
              className="form-control"
              placeholder="请输入模拟接口的特征描述"
              value={desc}
              onChange={e => {
                this.setState({desc: e.target.value});
              }}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <textarea
              className="form-control"
              rows="20"
              placeholder="请粘贴页面源代码"
              value={code}
              onChange={e => {
                this.setState({code: e.target.value});
              }}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            {!isModify &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickApi}
              >
                创建
              </button>}
            {isModify &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickApi}
              >
                编辑
              </button>}
            {isModify &&
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handlerClickCreagePage}
                style={{marginLeft: 20}}
              >
                删除
              </button>}
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12" />
        </div>
      </div>
    );
  }

  handlerClickApi = async e => {
    let {
      pageType,
      kind,
      desc,
      code,
      id,
      name,
    } = this.state;
    if (!code) {
      return false;
    }
    let changeType = 'save';
    if (id >= 0) {
      changeType = 'update';
    }
    let data = await FETCH_APICODEINFO({
      type: changeType,
      pageType,
      kind,
      desc,
      code,
      id,
      name,
    });
    window.location.reload();
  };
}

CreateApi.propTypes = {};

const mapStateToProps = state => ({...state});

export default connect(mapStateToProps)(CreateApi);
