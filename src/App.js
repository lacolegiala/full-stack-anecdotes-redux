import React, { useEffect } from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import anecdoteService from './services/anecdotes'
import { useSelector } from 'react-redux'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  }, [dispatch])
  
  const notification = useSelector(state => state.notifications)

  return (
    <div>
      {notification !== '' && <Notification></Notification>}
      <AnecdoteList></AnecdoteList>
      <AnecdoteForm></AnecdoteForm>
    </div>
  )
}

export default App