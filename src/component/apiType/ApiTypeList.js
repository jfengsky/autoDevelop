import React, {Component, PropTypes} from 'react';

import {FETCH_APIINFO} from '../../store/fetch';

import {getPageTypeName} from '../../util/filter';

const Thead = () => (
  <thead>
    <tr>
      <th>#</th>
      <th>path</th>
      <th>method</th>
      <th>depend</th>
      <th>bak</th>
    </tr>
  </thead>
);

class ApiTypeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    FETCH_APIINFO({
      type: 'search',
    }).then(data => {
      this.setState({
        list: data.data,
      });
    });
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <Thead />
        <tbody>
          {this.state.list.map(item => {
            let {
              id,
              name,
              kind,
              method,
            } = item;
            let kindName = getPageTypeName(this.props.pageTypeList, kind - 0);
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{method}</td>
                <td>{kindName}</td>
                <td>
                  <a
                    onClick={this.handlerClickModify.bind(this, item)}
                    href="javascript:void(0)"
                  >
                    编辑
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  handlerClickModify = e => {
    this.props.apiModify(e);
  };
}

ApiTypeList.propTypes = {};

export default ApiTypeList;
