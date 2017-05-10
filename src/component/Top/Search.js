import React, {Component, PropTypes} from 'react'

export default class Search extends Component {
  render() {
    return (
      <form className="navbar-form navbar-right">
        <div className="form-search search-only">
          <i className="search-icon glyphicon glyphicon-search" />
          <input type="text" className="form-control search-query" />
        </div>
      </form>
    )
  }
}

Search.propTypes = {}
