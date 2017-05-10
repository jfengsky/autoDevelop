import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Search from './Search'

export default class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="open">
              <Link to="/">首页<b className="caret" /></Link>
              <ul className="dropdown-menu">
                <li><a href="javascript:void(0)">创建页面</a></li>
                <li><a href="javascript:void(0)">编辑页面类型</a></li>
              </ul>
            </li>
            <li><Link to="/api">接口<b className="caret" /></Link></li>
            <li><Link to="/modify">配置</Link></li>
          </ul>
          <Search />
        </div>
      </div>
    )
  }
}
