import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import {FETCH_PAGEINFO} from '../store/fetch'

const Thead = () => (
  <thead>
    <tr>
      <th>#</th>
      <th>文件名</th>
      <th>描述</th>
      <th>页面类型</th>
      <th>操作</th>
    </tr>
  </thead>
)

const getKindName = (kind, pageTypeList) => {
  let name = ''
  pageTypeList.filter(item => {
    if (item.id === kind) {
      name = item.name
    }
  })
  return name
}

class PageList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageList: [],
    }
  }

  componentDidMount() {
    FETCH_PAGEINFO({
      type: 'search',
    }).then(data => {
      let pageList = []
      data.data.map(({id, name, desc, kind}) => {
        pageList.push({
          name: name + '.html',
          desc: desc,
          id,
          kind,
          kindName: getKindName(kind, this.props.pageTypeList),
        })
      })

      this.setState({
        pageList,
      })
    })
  }

  render() {
    return (
      <table className="table table-striped">
        <Thead />
        <tbody>
          {this.state.pageList.map(({id, name, desc, kindName}) => {
            return (
              <tr>
                <th scope="row">{id}</th>
                <td>
                  <a href={`/pages/${name}`} target="_blank">{name}</a>
                </td>
                <td>{desc}</td>
                <td>{kindName}</td>
                <td>
                  <a href={`/home/createPage/${id}`}>编辑</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

PageList.propTypes = {}

const mapStateToProps = (state, ownProps) => {
  return {
    pageTypeList: state.pageTypeList,
  }
}

export default connect(mapStateToProps)(PageList)
