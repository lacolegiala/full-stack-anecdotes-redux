import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notification.text
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      <strong>{notification}</strong>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  } 
}

const ConnectedNotification = connect(mapStateToProps)(Notification)

export default ConnectedNotification