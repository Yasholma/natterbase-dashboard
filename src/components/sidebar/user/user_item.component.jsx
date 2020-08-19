import React from "react"
import "./user_item.style.scss"

const UserItem = ({ name, bgColor }) => (
  <li className="user__item">
    <a href="/home" className={`user__link ${bgColor}`}>
      {name}
    </a>
  </li>
)

export default UserItem
