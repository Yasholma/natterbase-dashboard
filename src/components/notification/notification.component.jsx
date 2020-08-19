import React from "react"
import "./notification.style.scss"

const Notification = ({ show, type, message }) => {
  return (
    <div className={`notification ${show ? "show" : "close"}`}>
      <div className={`notification__alert notification__alert--${type}`}>
        {message}
      </div>
    </div>
  )
}

export default Notification
