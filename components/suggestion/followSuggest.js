/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Suggestion from "./suggestion";
import follow from "../../styles/followSuggest.module.css";
import styles from "../../styles/Home.module.css";
function FollowSuggest() {
  const [img_src, setImg_src] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAA1BMVEWFhYWbov8QAAAASElEQVR4nO3BMQEAAADCoPVPbQdvoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+A8XAAAG6+KQCAAAAAElFTkSuQmCC"
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("user") === null) {
      } else {
        setImg_src(JSON.parse(localStorage.getItem("user")).porofile_img);
      }
    }
  }, []);
  const date = new Date();
  return (
    <aside className={styles.follow_suggestion}>
      <section className={follow.switch}>
        <div className={follow.porofile_img_div}>
          <img src={img_src} alt="" className={follow.porofile_img} />
        </div>
        <div className={follow.username_div}>
          <h5 className={follow.username}>
            {typeof window !== "undefined"
              ? localStorage.getItem("user") !== null
                ? JSON.parse(localStorage.getItem("user")).username
                : "Unknowen"
              : "Unknowen"}
          </h5>
          <h5 className={follow.name}>
            {typeof window !== "undefined"
              ? localStorage.getItem("user") !== null
                ? JSON.parse(localStorage.getItem("user")).fullname
                : "Unknowen"
              : "Unknowen"}
          </h5>
        </div>
        <div className={follow.switch_div}>
          <button
            onClick={() => {
              alert("This feature is disabled.");
            }}
            className={follow.switch_button}
          >
            Switch
          </button>
        </div>
      </section>
      <section className={follow.follow_suggestions}>
        <header className={follow.header}>
          <h4 className={follow.header_title}>Suggestions For You</h4>
          <h4 className={follow.see_all}>See All</h4>
        </header>
        <Suggestion
          porofile="https://i.pinimg.com/originals/95/c2/19/95c219cdc1fa1508548d3aa764fa3715.jpg"
          username="Vito.company"
          detail="Followed by vito.mohagheghian + 3 more"
        />
        <Suggestion
          porofile="https://i.pinimg.com/originals/95/c2/19/95c219cdc1fa1508548d3aa764fa3715.jpg"
          username="user"
        />
        <Suggestion
          porofile="https://i.pinimg.com/originals/95/c2/19/95c219cdc1fa1508548d3aa764fa3715.jpg"
          username="Vito.company"
          detail="Followed by vito.mohagheghian + 3 more"
        />
        <Suggestion
          porofile="https://i.pinimg.com/originals/95/c2/19/95c219cdc1fa1508548d3aa764fa3715.jpg"
          username="user"
          detail="Followed by vito.mohagheghian + 3 more"
        />
        <Suggestion
          porofile="https://i.pinimg.com/originals/95/c2/19/95c219cdc1fa1508548d3aa764fa3715.jpg"
          username="Vito.company"
          detail="Followed by vito.mohagheghian + 3 more"
        />
      </section>
      <section className={follow.links_div}>
        <a href="https://about.instagram.com/" className={follow.link}>
          About
        </a>
        <a href="https://help.instagram.com/" className={follow.link}>
          Help
        </a>
        <a href="https://about.instagram.com/blog/" className={follow.link}>
          Press
        </a>
        <a
          href="https://developers.facebook.com/docs/instagram"
          className={follow.link}
        >
          API
        </a>
        <a
          href="https://about.instagram.com/about-us/careers"
          className={follow.link}
        >
          Jobs
        </a>
        <a
          href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
          className={follow.link}
        >
          Privacy
        </a>
        <a
          href="https://help.instagram.com/581066165581870"
          className={follow.link}
        >
          Terms
        </a>
        <a
          href="https://www.instagram.com/explore/locations/"
          className={follow.link}
        >
          Locaitions
        </a>
        <a
          href="https://www.instagram.com/directory/profiles/"
          className={follow.link}
        >
          Top Accounts
        </a>
        <a
          href="https://www.instagram.com/directory/hashtags/"
          className={follow.link}
        >
          Hashtags
        </a>
        <a href="" className={follow.no_dot}>
          Language
        </a>
      </section>
      <section className={follow.copyright}>
        © {date.getUTCFullYear()} INSTAGRAM FROM META
      </section>
    </aside>
  );
}

export default FollowSuggest;
