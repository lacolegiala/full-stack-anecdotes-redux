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
    default:
      return state
  }
}

export default reducer