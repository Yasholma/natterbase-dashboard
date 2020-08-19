import React from "react"

import { ReactComponent as SearchIcon } from "../../../assets/images/icons/search.svg"
import StatusIcon from "../../../assets/images/icons/owner.svg"
import Verified from "../../../assets/images/icons/verified.svg"
import UserImage from "../../../assets/images/users/user-1.png"
import Caret from "../../../assets/images/icons/arrow-down.svg"

import "./mobile-nav.style.scss"

const MobileNavbar = ({ show }) => {
  return (
    <div className={`mobile-nav ${show ? "active" : ""}`}>
      <div className="mobile-nav__content">
        {/* Navbar Search */}
        <div className="mobile-nav__content__search">
          <form action="">
            <label htmlFor="search_mobile" className="navbar__search__icon">
              <SearchIcon className="search-icon" />
            </label>
            <input
              type="text"
              className="mobile-nav__content__search__input"
              placeholder="Search"
              id="search_mobile"
            />
          </form>
        </div>

        {/* Navbar User Account */}
        <div className="mobile-nav__content__account">
          {/* Status */}
          <div className="mobile-nav__content__status">
            <img src={StatusIcon} alt="Status" className="icon" />
          </div>

          {/* Verified */}
          <div className="mobile-nav__content__verified">
            <img src={Verified} alt="Verified" className="icon" />
          </div>

          {/* Account */}
          <div className="mobile-nav__content__account__profile">
            <img src={UserImage} alt="User" className="navbar__account__img" />
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
        </div>
      </div>
    </div>
  )
}

export default MobileNavbar
