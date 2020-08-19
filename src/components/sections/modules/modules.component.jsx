import React from "react"
import Directory from "./directory/directory.component"
import ModuleCard from "./module_card/module_card.component"

// Backlog Data
import { backlogData } from "./../../../data/backlog"

import "./modules.style.scss"

const ModulesContainer = () => {
  const [backlogs, setBacklogs] = React.useState([])

  React.useEffect(() => {
    // Attempt to get data from localStorage
    const logsData = JSON.parse(localStorage.getItem("backlogs"))
    if (!logsData) {
      // Add temporal data to localstorage
      localStorage.setItem("backlogs", JSON.stringify(backlogData))
      setBacklogs(backlogData)
    } else {
      setBacklogs(logsData)
    }
  }, [])
  return (
    <div className="modules">
      <div className="directories">
        <div className="modules__section">
          {/* Title and Button */}
          <Directory title="Backlog" />
          {/* Content */}
          <div className="modules__content">
            <ModuleCard text="Apply Gradient to |" />

            {backlogs.map((data, index) => {
              return (
                <ModuleCard
                  key={index}
                  text={data.text}
                  dueDate={data.dueDate}
                  saved
                />
              )
            })}
          </div>
        </div>
        <div className="modules__section">
          {/* Title and Button */}
          <Directory title="Todo" />
          {/* Content */}
          <div className="modules__content empty"></div>
        </div>
        <div className="modules__section">
          {/* Title and Button */}
          <Directory title="In Progress" />
          {/* Content */}
          <div className="modules__content empty"></div>
        </div>
        <div className="modules__section">
          {/* Title and Button */}
          <Directory title="In Review" />
          {/* Content */}
          <div className="modules__content empty"></div>
        </div>
        <div className="modules__section">
          {/* Title and Button */}
          <Directory title="Done" />
          {/* Content */}
          <div className="modules__content empty"></div>
        </div>
      </div>
    </div>
  )
}

export default ModulesContainer
