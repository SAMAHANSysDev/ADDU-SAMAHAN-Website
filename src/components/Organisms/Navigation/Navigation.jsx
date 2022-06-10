import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.scss";
import { Button } from "../../ComponentIndex";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";
import menuFill from "@iconify/icons-eva/menu-fill";
import { image } from "../../../data/dataIndex";
import { useMediaQuery } from "@mui/material";

const Navigation = ({ transparent = false }) => {
  /* IF SCREEN IS BETWEEN 992px TO 1200px, USE LOGO ONLY */
  const minWidth1200px = useMediaQuery('(min-width:1200px)')
  const maxWidth992px = useMediaQuery('(max-width:992px)')

  const [, setMenuClicked] = useState(false);
  const [, setSubMenuClicked] = useState(false);
  const header = useRef();
  const nav_list_1 = useRef();
  const nav_list_2 = useRef();
  const li_help_portal = useRef();

  function handleClick() {
    setMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_1.current.style.display = "block";
        header.current.style.backgroundColor = "#1A275F";
      } else {
        nav_list_1.current.style = "";
        header.current.style = "";
      }

      return !prevClickState;
    });
  }

  function handleSubMenuOpen() {
    setSubMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_2.current.style.display = "block";
      } else {
        nav_list_2.current.style = "";
      }

      return !prevClickState;
    });
  }

  return (
    <>
      <header
        className={transparent ? styles["header-transparent"] : styles.header}
        ref={header}
      >
        <nav className={styles.navbar + " container"}>
          <div className={styles["navbar__main"]}>
            <div className={styles["navbar__menu--division"]}>
              <Link href="/">
                <div className={styles.samahan_logo}>
                  <Image.default
                    src={(minWidth1200px || maxWidth992px) ? image.samahanLogo : image.samahanLogoOnly}
                    alt="SAMAHAN Website Logo"
                    width={(minWidth1200px || maxWidth992px) ? "220px" : "42px"}
                    height="100%"
                    objectFit="contain"
                    draggable="false"
                    priority
                  ></Image.default>
                </div>
              </Link>
              <div className={styles.nav_menu}>
                <button onClick={handleClick}>
                  <Icon icon={menuFill} color="white" height="32" />
                </button>
              </div>
            </div>
            <ul ref={nav_list_1} className={styles["nav-list-1"]}>
              <li className={styles["nav-links-1"]}>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className={styles["drop_down"] + " " + styles["nav-links-1"]}>
                <button onClick={handleSubMenuOpen} id="offices">
                  OFFICES
                  <Icon
                    icon={baselineKeyboardArrowDown}
                    color="white"
                    height="24"
                  />
                </button>
                <a>OFFICES</a>
                <Icon
                  icon={baselineKeyboardArrowDown}
                  color="white"
                  height="24"
                />
                <ul ref={nav_list_2} className={styles["nav-list-2"]}>
                  <li>
                    <Link href="/office_of_the_president">
                      Office of the President
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_vice_president">
                      Office of the Vice-President
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_secretary_general">
                      Office of the Secretary-General
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_treasurer">
                      Office of the Treasurer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles["nav-links-1"]}>
                <Link href="/student_judicial_court">
                  STUDENT JUDICIAL COURT
                </Link>
              </li>
              <li className={styles["simula_logo"] + " " + styles["nav-links-1"]}>
                <Link href="/">
                  <Image.default
                    src={image.AFYOPSimula}
                    alt="SAMAHAN Website Logo"
                    width="80px"
                    height="100%"
                    objectFit="contain"
                    draggable="false"
                    priority
                  ></Image.default>
                </Link>
              </li>
              <li
                className={styles["nav-links-1"]}
                ref={li_help_portal}
                id="li_help_portal"
              >
                <Link href="/help_portal">HELP PORTAL</Link>
              </li>
            </ul>
          </div>
          <div className={styles["navbar__help-portal"]}>
            <Link href="/help_portal" passHref>
              <Button label="HELP PORTAL" id="help-portal-btn" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
