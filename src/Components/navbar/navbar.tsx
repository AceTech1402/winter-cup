import { NavLink, Link } from "react-router-dom";
import { createRef, useState } from "react";
import { HashLink } from "react-router-hash-link";

import logoMenu from "./../../icons/menu-icon.svg";
import logoImg from "./../../assets/pictures/navbar/logo.svg";

import classes from "./navbar.module.css";
import { CupIcon, HomeIcon } from "../svgs/svgs";

const Navbar: React.FC = () => {
  const [locationMark, setLocationMark] = useState(0);
  const list_nav = createRef<HTMLUListElement>();
  const [actvieClass, setActiveClass] = useState(false);
  const [statusMenu, setStatusMenu] = useState(false);

  const calculateofSize = (index: number) => {
    let number = 0;
    if (list_nav.current) {
      for (let i = 0; i < index; i++) {
        // @ts-ignore
        number += list_nav.current.children[i].clientWidth;
      }
    }
    return number;
  };

  const HandleMarkMovement = (index: number) => {
    if (list_nav.current) {
      if (index !== 1) {
        setLocationMark(calculateofSize(index) + (index - 1) * 80 - 17);
      } else {
        setLocationMark(0);
      }
    }
  };

  const openMenu = () => {
    setStatusMenu(true);
  };
  const closeMenu = (number?: number) => {
    setStatusMenu(false);
    if (number) {
      HandleMarkMovement(number);
    }
  };

  return (
    <div className={classes.navbar_wrapper}>
      <div
        className={`${classes.cover} ${statusMenu ? classes.active : ""}`}
        onClick={() => closeMenu()}
      ></div>
      <div className={classes.navbar}>
        <NavLink to="/" className={classes.logo}>
          <div className={classes.image}>
            <img src={logoImg} />
          </div>
        </NavLink>
        <div
          className={`${classes.list_nav} ${statusMenu ? classes.active : ""}`}
        >
          <div className={classes.nav_mobile_header}>
            <NavLink
              to="/"
              className={classes.logo}
              style={{ display: statusMenu ? "flex" : "none" }}
            >
              <div className={classes.image}>
                <img src={logoImg} />
              </div>
            </NavLink>
            {/* <div
                className={classes.button_close}
                onClick={() => closeMenu()}
              ></div> */}
          </div>
          <ul ref={list_nav}>
            <div
              className={`${classes.mark} ${actvieClass ? classes.active : ""}`}
              style={{ left: `${locationMark}px` }}
            ></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  setActiveClass(true);
                  return isActive ? classes.active : "";
                }}
                onClick={() => closeMenu(1)}
              >
                <div className={classes.image}>
                  <HomeIcon selected={actvieClass} />
                </div>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/coming-soon"
                className={({ isActive }) => {
                  setActiveClass(true);
                  return isActive ? classes.active : "";
                }}
                onClick={() => closeMenu(2)}
              >
                <div className={classes.image}>
                  <CupIcon selected={actvieClass} />
                </div>
                <p>Result/Schedule</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports-platz"
                className={({ isActive }) => {
                  setActiveClass(true);
                  return isActive ? classes.active : "";
                }}
                onClick={() => closeMenu(3)}
              >
                <div className={classes.image}>
                  <CupIcon selected={actvieClass} />
                </div>
                <p>SportsPlatz</p>
              </NavLink>
            </li>
          </ul>
          <div className={classes.button}>
            <HashLink to="/register" smooth onClick={() => closeMenu()}>
              <p>Register now</p>
            </HashLink>
          </div>
        </div>
        <div className={classes.button_open_menu} onClick={() => openMenu()}>
          <div className={classes.image}>
            <img src={logoMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
