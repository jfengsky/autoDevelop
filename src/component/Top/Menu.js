import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Search from './Search';
import modal from '../../container/modal';

import {add_pageType} from '../../action/pageType';

/*const PageInfo = ({ match }) => {
  return (
    <ul className="dropdown-menu">
      <li>
        <Link to={`${match.url}/createPage`}>创建页面</Link>
        </li>
      <li>
        <Link to={`${match.url}/pageTypeModify`}>编辑页面类型</Link>
      </li>
    </ul>
  )
}*/

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: {
        homeListSlide: false,
        apiListSlide: false,
        modifyListSlide: false,
      },
    };
  }
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li
              className={
                `${this.state.nav.homeListSlide ? 'dropdown open' : 'dropup'}`
              }
              onMouseEnter={this.handleMouseEnter.bind(this, 'home')}
              onMouseLeave={this.handleMouseLeave.bind(this, 'home')}
            >
              <Link to="/">首页<b className="caret" /></Link>
              <ul className="dropdown-menu">
                <li><a href="/home/createPage">创建页面</a></li>
                <li>
                  <a href="/home/pageTypeModify">
                    编辑页面类型
                  </a>
                </li>
              </ul>
            </li>
            <li><Link to="/api">接口<b className="caret" /></Link></li>
            <li><Link to="/modify">配置</Link></li>
          </ul>
          <Search />
        </div>
      </div>
    );
  }

  handleMouseEnter = type => {
    this.navChange(type, true);
  };

  handleMouseLeave = type => {
    this.navChange(type, false);
  };

  navChange = (type, bool) => {
    let {nav} = this.state;
    switch (type) {
      case 'home':
        nav.homeListSlide = bool;
        break;
      case 'api':
        nav.apiListSlide = bool;
        break;
      default:
        nav.modifyListSlide = bool;
        break;
    }
    this.setState({
      nav,
    });
  };

  // handleClickPageType = e => {
  //   modal({type: 'editPageType', pageTypeList: this.props.pageTypeList, addPageType: this.props.addPageType})
  // }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPageType: value => {
      dispatch(add_pageType(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
