import React from 'react'
import { voteAction } from '../reducers/anecdoteReducer'
import { useDispatch, connect} from 'react-redux'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const dispatch = useDispatch()

  const vote = (id, anecdote) => {
    console.log('vote', id)
    dispatch(voteAction(id, anecdote))
    dispatch(setNotification(`you voted for '${anecdote.content}'`, 10))
  }

  const sortedAnecdotes = [].concat(props.anecdotes)
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

const ConnectedAnecdotes = connect(mapStateToProps)(AnecdoteList)

export default ConnectedAnecdotes