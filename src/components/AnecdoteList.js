import React from 'react'
import { like } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(like(id))
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
      {sortedAnecdotes}
    </div>
  )
}

export default AnecdoteList