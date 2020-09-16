import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import ConnectedAnecdoteList from './components/AnecdoteList'
import ConnectedNotification from './components/Notification'
import { connect } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  } 
}

const App = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])
  
  const notification = props.notification.text

  return (
    <div>
      {notification !== undefined && <ConnectedNotification></ConnectedNotification>}
      <ConnectedAnecdoteList></ConnectedAnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

const ConnectedApp = connect(mapStateToProps)(App)

export default ConnectedApp