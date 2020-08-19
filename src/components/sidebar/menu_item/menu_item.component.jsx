import React from "react"
import "./menu_item.style.scss"

const MenuItem = ({ icon, title, active }) => (
  <li className="sidebar__menu__item">
    <a
      href="/home"
      className={`sidebar__menu__link ${
        active && "sidebar__menu__link--active"
      }`}
    >
      <img src={icon} alt="Icon" className="sidebar__menu__icon" />
      <span className="sidebar__menu__title">{title}</span>
    </a>
  </li>
)

export default MenuItem
