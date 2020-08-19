import React from "react"
import SideBar from "./components/sidebar/sidebar.component"
import Navbar from "./components/navbar/navbar.component"
import Tabs from "./components/tabs/tabs.component"
import "./App.scss"

import { ReactComponent as PlusIcon } from "./assets/images/icons/plus.svg"
import Notification from "./components/notification/notification.component"
import MobileNavbar from "./components/navbar/mobile-nav/mobile-nav.component"

function App() {
  const [sidebar, setSidebar] = React.useState(false)
  const [mobileMenu, setMobileMenu] = React.useState(false)

  return (
    <div className="wrapper">
      {/* Sidebar */}
      <SideBar visiblility={sidebar} />

      <div id="content" className={`content ${sidebar ? "expanded" : ""}`}>
        {/* Header  */}
        <header className="content__header">
          {/* Menu Toggler */}
          <div
            className={`sidebar__toggler ${sidebar && "active"}`}
            onClick={() => setSidebar(!sidebar)}
            title="Close Sidebar"
          >
            <span className="sidebar__toggler__item"></span>
            <span className="sidebar__toggler__item"></span>
            <span className="sidebar__toggler__item"></span>
          </div>
          {/* Navbar */}
          <Navbar
            mobileMenuStatus={mobileMenu}
            toggleMobileMenu={() => setMobileMenu(!mobileMenu)}
          />
          {/* Mobile Navbar */}
          <MobileNavbar show={mobileMenu} />
        </header>
        {/* Main Content */}
        <main className="main">
          <div className="container">
            {/* Tabs */}
            <Tabs />
          </div>
        </main>

        {/* Floating Button */}
        <div className="floating-btn">
          <PlusIcon className="icon" />
        </div>
      </div>

      {/* Notification */}
      <Notification
        type="success"
        message="Modules have been created sucessfully"
      />
    </div>
  )
}

export default App
