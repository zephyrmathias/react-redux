const spaceXReducers = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_SPACEX_REQUEST':
      return { ...state, isFetching: true }
    case 'FETCH_SPACEX_SUCCESS':
      return { ...state, isFetching: false, payload: action.payload }
    default:
      return state
  }
}

export default spaceXReducers
