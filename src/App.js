import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useSelector } from 'react-redux'

const App = () => {
  
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