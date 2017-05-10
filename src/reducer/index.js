import initialState from '../store/initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case 'COUNTA_ADD':
      return Object.assign({}, state, {
        counta: ++state.counta,
      })
    default:
      return state
  }
}
