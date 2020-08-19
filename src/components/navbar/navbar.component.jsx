import React from "react"

import FCMBLogo from "../../assets/images/icons/fcmb-logo.svg"
import FCMBLogoSM from "../../assets/images/icons/fcmb-sm.svg"
import ThreeDots from "../../assets/images/icons/three-dots.svg"
import SearchIcon from "../../assets/images/icons/search.svg"
import BellIcon from "../../assets/images/icons/bell.svg"
import StatusIcon from "../../assets/images/icons/owner.svg"
import Verified from "../../assets/images/icons/verified.svg"
import UserImage from "../../assets/images/users/user-1.png"
import Caret from "../../assets/images/icons/arrow-down.svg"

import "./navbar.style.scss"

const Navbar = ({ mobileMenuStatus, toggleMobileMenu }) => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar__nav">
          {/* Navbar Logo */}
          <div className="navbar__logo">
            <img src={FCMBLogo} alt="FCMB Logo" className="hide-sm" />
            <img src={FCMBLogoSM} alt="FCMB Logo" className="hide-md" />
            <img src={ThreeDots} alt="Read More" className="read-more" />
          </div>
          <div className="vertical-line"></div>
          {/* Navbar Search */}
          <div className="navbar__search">
            <form action="">
              <label htmlFor="search" className="navbar__search__icon">
                <img src={SearchIcon} alt="Search Icon" />
              </label>
              <input
                type="text"
                className="navbar__search__input"
                placeholder="Search"
                id="search"
              />
            </form>
          </div>

          {/* Navbar Right */}
          <div className="navbar__right">
            {/* Notification */}
            <div className="navbar__notification">
              <img src={BellIcon} alt="Notification" className="icon" />
            </div>

            {/* Status */}
            <div className="navbar__status">
              <img src={StatusIcon} alt="Status" className="icon" />
            </div>

            {/* Verified */}
            <div className="navbar__verified">
              <img src={Verified} alt="Verified" className="icon" />
            </div>

            {/* Account */}
            <div className="navbar__account">
              <img
                src={UserImage}
                alt="User"
                className="navbar__account__img"
              />
              <div className="navbar__account__profile">
                <div className="navbar__account__info">
                  <h3 className="navbar__account__info__name">Chioma Davis</h3>
                  <p className="navbar__account__info__email">
                    Chioma@natterbase
                  </p>
                </div>
                <img
                  src={Caret}
                  alt="Dropdown Caret"
                  className="navbar__account__caret"
                />

                {/* Dropdown */}
                <div className="dropdown">
                  <ul className="dropdown_list">
                    <li className="dropdown__list__item">
                      <a href="/profile" className="dropdown__list__link">
                        Profile
                      </a>
                    </li>
                    <li className="dropdown__list__item">
                      <a href="/settings" className="dropdown__list__link">
                        Settings
                      </a>
                    </li>
                    <li className="dropdown__list__item dropdown__separator"></li>
                    <li className="dropdown__list__item">
                      <a href="/logout" className="dropdown__list__link">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggler */}
            <div
              className={`mobile-menu__toggler hide-md ${
                mobileMenuStatus ? "active" : ""
              }`}
              onClick={toggleMobileMenu}
            >
              <span className="mobile-menu__toggler__item"></span>
              <span className="mobile-menu__toggler__item"></span>
              <span className="mobile-menu__toggler__item"></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
