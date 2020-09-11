import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const vote = (id, anecdote) => {
    console.log('vote', id)
    dispatch(voteAction(id, anecdote))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)
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
          <button onClick={() => vote(anecdote.id, anecdote)}>vote</button>
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