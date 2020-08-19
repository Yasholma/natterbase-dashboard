import React from "react"
import { Tab } from "semantic-ui-react"
import "./tabs.style.scss"

import { ReactComponent as ClockIcon } from "../../assets/images/icons/clock.svg"
import ModulesContainer from "./../sections/modules/modules.component"

const panes = [
  {
    menuItem: "Overview",
    render: () => <Tab.Pane attached={false}>Overview</Tab.Pane>,
  },
  {
    menuItem: "Teams",
    render: () => <Tab.Pane attached={false}>Teams</Tab.Pane>,
  },
  {
    menuItem: "Modules",
    render: () => (
      <Tab.Pane attached={false}>
        <ModulesContainer />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Files",
    render: () => <Tab.Pane attached={false}>Files</Tab.Pane>,
  },
  {
    menuItem: "Progress",
    render: () => <Tab.Pane attached={false}>Progress</Tab.Pane>,
  },
]

const Tabs = () => (
  <div className="tabs">
    {/* Tabs Section */}
    <Tab
      menu={{ secondary: true, pointing: true }}
      panes={panes}
      activeIndex={2}
    />
    {/* Tabs Right */}
    <div className="tabs__right">
      <p className="tabs__right__text tabs__right__text--skyblue">
        <a href="/modules">All Task</a>
      </p>
      <p className="tabs__right__text tabs__right__text--danger">
        {/* Rounded switch */}
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <a href="/modules">All Modules</a>
      </p>
      <p className="tabs__right__text tabs__right__text--green">
        <ClockIcon className="tabs__right__icon" /> Project Deadline : 6 weeks
      </p>
    </div>
  </div>
)

export default Tabs
