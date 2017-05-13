const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

// 页面类型接口
const pagetType = '/pageType'

// 页面类型一些接口
/**
 * 
 * data: {
      type: 'save',  'search' 'delete', 'modify'
      text: ''
    }
 */
export const FETCH_PAGETYPE = async data => {
  return await fetch(pagetType, {
    method: 'post',
    headers: headers,
    body: JSON.stringify(data),
  }).then(response => response.json())
}
