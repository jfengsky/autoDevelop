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
    let {data} = this.props;
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
          {data.map(item => {
            let {
              id,
              name,
            } = item;
            return <option value={id} key={id}>{name}</option>;
          })}
        </select>
        <span className="selecter-selected">{data[0].name}</span>
        <div
          className="selecter-options"
          style={{display: showList ? 'block' : 'none'}}
        >
          {data.map(item => {
            let {
              id,
              name,
            } = item;
            return (
              <span className="selecter-item" data-value={id} key={id}>
                {name}
              </span>
            );
          })}
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
