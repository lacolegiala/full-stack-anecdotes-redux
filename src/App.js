import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import { useSelector } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
  const notification = useSelector(state => state.notifications.text)

  return (
    <div>
      {notification !== undefined && <ConnectedNotification></ConnectedNotification>}
      <ConnectedAnecdoteList></ConnectedAnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App