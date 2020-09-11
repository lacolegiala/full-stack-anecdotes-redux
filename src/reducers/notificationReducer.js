
const initialState = ''

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_NOTIFICATION':
      return action.data.text
    case 'HIDE':
      return ''
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
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: {
        text: text
      }
    })
    setTimeout(() => {
      dispatch(hideNotification())
    }, timer * 1000)
  }
}

export default reducer