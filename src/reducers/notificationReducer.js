
const initialState = {
  text: undefined,
  timerId: undefined
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data
    case 'HIDE':
      return initialState
    default:
      return state
  }
}

export const hideNotification = () => {
  return {
    type: 'HIDE'
  }
}

export const setNotification = (text, timer) => {
  return async (dispatch, getState) => {
    const currentTimeoutId = getState().notifications.timerId
    if (typeof currentTimeoutId === 'number') {
      window.clearTimeout(currentTimeoutId)
    }
    const newTimeoutId = setTimeout(() => {
      dispatch(hideNotification())
    }, timer * 1000)

    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        text: text,
        timerId: newTimeoutId
      }
    })
  }
}

export default reducer