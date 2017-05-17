import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {FETCH_PAGEINFO} from '../../store/fetch';

class CreagePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.pageType || 0,
      desc: props.desc || '',
      code: props.code || '',
      name: props.name || '',
      errorMessage: '',
      isUpdata: false,
    };
  }

  async componentDidMount() {
    let {id} = this.props;
    if (id >= 0) {
      let {
        data,
        state,
      } = await FETCH_PAGEINFO({
        type: 'searchfile',
        id,
      });

      let {
        kind,
        desc,
        code,
        name,
      } = data;
      this.setState({
        type: kind,
        desc,
        code,
        name,
        isUpdata: true,
      });
    }
  }

  render() {
    let {
      type,
      desc,
      code,
      name,
      isUpdata,
    } = this.state;
    return (
      <div>
        <h5 className="modal-title">创建页面</h5>
        <div className="row">
          <div className="col-xs-12">
            <select
              className="form-control"
              onChange={this.handlerChangePageType}
              value={type}
              ref="pageType"
            >
              {this.props.pageTypeList.map(({name, id}) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <div className="input-group">
              <input
                type="text"
                ref="pageName"
                className="form-control"
                placeholder="请输入文件名"
                value={name}
                onChange={this.handlerChangeName}
                readOnly={isUpdata ? true : false}
              />
              <span className="input-group-addon">.html</span>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            <input
              type="text"
              ref="pageDesc"
              className="form-control"
              placeholder="请输入页面描述"
              value={desc}
              onChange={this.handlerChangeDesc}
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
              value={code}
              onChange={this.handlerChangeCode}
            />
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-12">
            {!isUpdata &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickCreagePage}
              >
                创建
              </button>}
            {isUpdata &&
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handlerClickCreagePage}
              >
                修改
              </button>}
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div
            className="col-xs-12"
            style={{display: this.state.errorMessage ? 'block' : 'none'}}
          >
            <div className="alert alert-danger" role="alert">
              {this.state.errorMessage}
            </div>
          </div>
        </div>
      </div>
    );
  }

  handlerClickCreagePage = e => {
    let {id} = this.props;

    let {
      pageName,
      pageType,
      pageDesc,
      pageCode,
    } = this.refs;
    let name = pageName.value;
    let kind = pageType.value - 0;
    let desc = pageDesc.value;
    let code = pageCode.value;

    let changeType = 'save';
    if (id >= 0) {
      changeType = 'updata';
    }

    if (!desc || !code || !name) {
      this.setState({
        errorMessage: '请填写页面信息',
      });
    } else {
      FETCH_PAGEINFO({
        type: changeType,
        name,
        kind,
        desc,
        code,
        id,
      });
    }
  };

  handlerChangePageType = e => {
    this.setState({
      type: e.target.value - 0,
    });
  };

  handlerChangeName = e => {
    this.setState({
      name: e.target.value,
    });
  };

  handlerChangeDesc = e => {
    this.setState({
      desc: e.target.value,
    });
  };

  handlerChangeCode = e => {
    this.setState({
      code: e.target.value,
    });
  };
}

CreagePage.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    pageTypeList: state.pageTypeList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // updataPageType: data => {
    //   dispatch(updata_pageType(data));
    // },
    // deletePageType: data => {
    //   dispatch(delete_pageType(data))
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreagePage);
