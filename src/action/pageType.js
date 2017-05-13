export const ADD_PAGETYPE = 'ADD_PAGETYPE'
export const UPDATA_PAGETYPE = 'UPDATA_PAGETYPE'

export const add_pageType = value => {
  return {
    type: ADD_PAGETYPE,
    value,
  }
}

export const updata_pageType = value => {
  return {
    type: UPDATA_PAGETYPE,
    value,
  }
}
