import React, { useState } from "react"

import MenuItem from "./menu_item/menu_item.component"
import UserItem from "./user/user_item.component"

import mainLogo from "../../assets/images/icons/main-logo.svg"
import HomeIcon from "../../assets/images/icons/home.svg"
import GitIcon from "../../assets/images/icons/git.svg"
import UserIcon from "../../assets/images/icons/user.svg"
import BoxIcon from "../../assets/images/icons/box.svg"
import ArrowRightIcon from "../../assets/images/icons/arrow-right.svg"

import "./sidebar.style.scss"

const SideBar = ({ visiblility }) => {
  // Expanding the Sidebar
  const [expand, setExpand] = useState(false)
  return (
    <nav
      id="sidebar"
      className={`sidebar ${expand ? "expand" : ""} ${
        visiblility ? "hide" : ""
      }`}
    >
      <h1 className="sidebar__logo">
        <a href="index.html" className="logo">
          <img src={mainLogo} alt="Main Logo" />
        </a>
      </h1>
      <ul className="sidebar__menu">
        <MenuItem icon={HomeIcon} title="Overview" />
        <MenuItem icon={GitIcon} title="Modules" active={true} />
        <MenuItem icon={UserIcon} title="Teams" />
        <MenuItem icon={BoxIcon} title="File" />
      </ul>
      <ul className="sidebar__menu sidebar__menu--users">
        {/* Color Codes: skyBlue, green, navyBlue, blue, redOrange  */}
        <UserItem name="PN" bgColor="skyBlue" />
        <UserItem name="JI" bgColor="green" />
        <UserItem name="LG" bgColor="navyBlue" />
        <UserItem name="AW" bgColor="redOrange" />
        <UserItem name="AW" bgColor="blue" />
      </ul>
      {/* Expand Arrow */}
      <div className="sidebar__expand">
        <span
          className={`sidebar__expand--arrow ${expand && "expand"} `}
          onClick={() => setExpand(!expand)}
        >
          <img src={ArrowRightIcon} alt="Icon" />
        </span>
      </div>
    </nav>
  )
}

export default SideBar
