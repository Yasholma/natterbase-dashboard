import React from "react"
import { ReactComponent as ThreeDots } from "../../../../assets/images/icons/three-dots.svg"
import "./directory.style.scss"
const Directory = ({ title }) => {
  return (
    <div className="directory">
      <header className="directory__header">
        <h4 className="directory__title">{title}</h4>
        <ThreeDots className="three-dots" />
      </header>
      <button className="directory__btn">+</button>
    </div>
  )
}

export default Directory
