import React from "react"
import { ReactComponent as ThreeDots } from "../../../../assets/images/icons/three-dots.svg"
import "./module_card.style.scss"
import { ReactComponent as ClockIcon } from "../../../../assets/images/icons/clock.svg"
import user1 from "../../../../assets/images/users/assignees/u-1.jpg"
import user2 from "../../../../assets/images/users/assignees/u-2.jpg"
import user3 from "../../../../assets/images/users/assignees/u-3.jpg"
import user4 from "../../../../assets/images/users/assignees/u-4.jpg"

const ModuleCard = ({ text, dueDate, saved }) => {
  return (
    <div className="module-card">
      {saved && <ThreeDots className="module-card__three-dots" />}
      <p>{text}</p>
      {saved && (
        <div className="module-card__footer">
          <div className="module-card__footer__date">
            <ClockIcon className="icon" />
            <p>{dueDate}</p>
          </div>
          <div className="module-card__footer__users">
            <img src={user1} alt="User" />
            <img src={user2} alt="User" />
            <img src={user3} alt="User" />
            <img src={user4} alt="User" />
          </div>
        </div>
      )}
    </div>
  )
}

export default ModuleCard
