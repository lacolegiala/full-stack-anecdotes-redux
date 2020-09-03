import React from 'react'
import { like, createAnecdote } from './reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(like(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.value = ''
    dispatch(createAnecdote(content))
  }

  const sortedAnecdotes = [].concat(anecdotes)
    .sort((a, b) => a.votes > b.votes ? -1 : 1)
    .map((anecdote) =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    )

  return (
    <div>
      <h2>Anecdotes</h2>
      {/* {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )} */}
      {sortedAnecdotes}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='content' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App