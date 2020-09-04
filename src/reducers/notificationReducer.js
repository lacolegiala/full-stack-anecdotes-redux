
const initialState = ''

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LIKE':
      return 'Voted'
    case 'NEW_ANECDOTE':
      return 'Added a new anecdote'
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

export default reducer