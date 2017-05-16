import initialState from '../store/initialState'

import {
  ADD_PAGETYPE,
  UPDATA_PAGETYPE,
  DELETE_PAGETYPE,
} from '../action/pageType'

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PAGETYPE:
      return Object.assign({}, state, {
        pageTypeList: [
          ...state.pageTypeList,
          {
            ...action.value,
          },
        ],
      })
    case UPDATA_PAGETYPE:
      return Object.assign({}, state, {
        pageTypeList: [...action.value],
      })
    case DELETE_PAGETYPE:
      return state
    // Object.assign({}, {
    //   ...state,
    //   pageTypeList: []
    // })
    default:
      return state
  }
}
