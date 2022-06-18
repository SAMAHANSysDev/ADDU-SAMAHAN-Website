import React from "react";
import styles from "./SysDevSocials.module.scss";

import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-mdi/instagram";
import facebookIcon from "@iconify/icons-mdi/facebook";
import twitterIcon from "@iconify/icons-mdi/twitter";
import githubIcon from "@iconify/icons-bi/github";

const SysDevSocials = ({ socials, color = "#2d419d" }) => {
  function renderIcon(site) {
    if (site === "github")
      return <Icon icon={githubIcon} color={color} height="28" />;
    else if (site === "facebook")
      return <Icon icon={facebookIcon} color={color} height="28" />;
    else if (site === "instagram")
      return <Icon icon={instagramIcon} color={color} height="28" />;
    else if (site === "twitter")
      return <Icon icon={twitterIcon} color={color} height="28" />;
  }

  return (
    <>
      <div className={styles["SysDevSocials"]}>
        {socials.map((social) => {
          return (
            <a href={social.url} key={social.site} target="_blank" rel="noopener noreferrer">
              {renderIcon(social.site)}
            </a>
          )
        })}
      </div>
    </>
  );
};

export default SysDevSocials;
