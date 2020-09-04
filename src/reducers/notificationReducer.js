const notifications = [
  'Voted',
  'Added a new anecdote '
]

const initialState = ''

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'LIKE':
      const votedNotification = notifications[0]
      return votedNotification
    case 'NEW_ANECDOTE':
      const newAnecdoteNotification = notifications[1]
      return newAnecdoteNotification
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