import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {FETCH_PAGETYPE} from '../../store/fetch';

import {updata_pageType, delete_pageType} from '../../action/pageType';

class ModifyPageType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 0,
      errorMessage: '',
    };
  }
  componentDidMount() {
    FETCH_PAGETYPE({
      type: 'search',
    }).then(data => {
      this.props.updataPageType(data.data);
    });
  }

  render() {
    return (
      <div>
        <h5 className="modal-title">编辑页面类型</h5>
        <div className="row">
          <div className="col-xs-10">
            <input
              type="text"
              ref="pageTypeInput"
              className="form-control"
              onFocus={this.handlerFocus}
              placeholder="请输入页面类型"
            />
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-success"
              onClick={this.createPageType}
            >
              创建
            </button>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div className="col-xs-10">
            <select
              className="form-control"
              onChange={this.handlerChangePageType}
              value={this.state.selectValue}
            >
              {this.props.pageTypeList.map(({name, id}) => (
                <option key={id} value={id}>{name}</option>
              ))}
            </select>
          </div>
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.deletePageType}
            >
              删除
            </button>
          </div>
        </div>
        <div className="row" style={{marginTop: 10}}>
          <div
            className="col-xs-10"
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

  handlerChangePageType = e => {
    this.setState({
      selectValue: e.target.value - 0,
    });
  };

  handlerFocus = e => {
    this.setState({
      errorMessage: '',
    });
  };

  createPageType = async e => {
    let value = this.refs.pageTypeInput.value.trim();
    if (value) {
      let {
        data: {
          id,
          name,
        },
      } = await FETCH_PAGETYPE({
        type: 'save',
        text: value,
      });
      // 偷懒 直接刷新 没去更新state
      window.location.reload();
      // this.props.addPageType({
      //   id,
      //   name,
      // });
    } else {
      this.setState({
        errorMessage: '请输入页面类型',
      });
    }
  };

  deletePageType = async e => {
    let id = this.state.selectValue;
    let {
      state,
      data,
    } = await FETCH_PAGETYPE({
      type: 'delete',
      id,
    });
    if (!state && data.ok === 1) {
      // 偷懒 直接刷新
      window.location.reload();

      // this.props.deletePageType({
      //   value: id
      // })
    }
  };
}

ModifyPageType.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updataPageType: data => {
      dispatch(updata_pageType(data));
    },
    // deletePageType: data => {
    //   dispatch(delete_pageType(data))
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifyPageType);
