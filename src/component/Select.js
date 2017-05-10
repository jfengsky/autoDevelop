import React, {Component, PropTypes} from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
    };
  }

  render() {
    let {showList} = this.state;
    return (
      <div
        className={`selecter ${showList ? 'open' : 'closed'}`}
        onFocus={this.focusHandle}
        onBlur={this.blurHandle}
        tabIndex="0"
      >
        <select
          name="selecter_basic"
          className="selecter_1 selecter-element"
          tabIndex="-1"
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
          <option value="6">Six</option>
          <option value="7">Seven</option>
          <option value="8">Eight</option>
          <option value="9">Nine</option>
          <option value="10">Ten</option>
        </select>
        <span className="selecter-selected">One</span>
        <div
          className="selecter-options"
          style={{display: showList ? 'block' : 'none'}}
        >
          <span className="selecter-item selected" data-value="1">One</span>
          <span className="selecter-item" data-value="2">Two</span>
          <span className="selecter-item" data-value="3">Three</span>
          <span className="selecter-item" data-value="4">Four</span>
          <span className="selecter-item" data-value="5">Five</span>
          <span className="selecter-item" data-value="6">Six</span>
          <span className="selecter-item" data-value="7">Seven</span>
          <span className="selecter-item" data-value="8">Eight</span>
          <span className="selecter-item" data-value="9">Nine</span>
          <span className="selecter-item" data-value="10">Ten</span>
        </div>
      </div>
    );
  }

  focusHandle = e => {
    this.setState({
      showList: true,
    });
  };

  blurHandle = e => {
    this.setState({
      showList: false,
    });
  };
}

Select.propTypes = {};

export default Select;
