import {pageType, pageInfo, apiInfo} from '../../routes/api'

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

// 页面类型一些接口
/**
 * 
 * data: {
      type: 'save',  'search' 'delete', 'modify'
      text: ''
    }
 */
export const FETCH_PAGETYPE = async data => {
  return await fetch(pageType, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  }).then(response => response.json())
}

// 页面代码一些借口
export const FETCH_PAGEINFO = async data => {
  return await fetch(pageInfo, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  }).then(response => response.json())
}

export const FETCH_APIINFO = async data => {
  return await fetch(apiInfo, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  }).then(response => response.json())
}
