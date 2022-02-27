/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import style from "../SpecificPost/specificpost.module.css";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
function Comment(props) {
  const date = new Date();
  const [like, setLiked] = useState(false);
  const [commentLike, setCommnetLike] = useState(0);
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [time, setTime] = useState(
    props.post.date === undefined ? date.getTime() : props.post.date
  );
  const newDate = date.getTime() - time;
  return (
    <div className={style.comment_container}>
      <div className={style.porofile_section}>
        <div className={style.comment_porofile_container_in_caption}>
          <img
            src="https://www.shareicon.net/data/256x256/2017/05/30/886553_user_512x512.png"
            alt=""
            className={style.porofile}
            onClick={() => {
              router.push(`/${props.data.username}`);
            }}
          />
        </div>
      </div>
      <div className={style.comment_caption_section}>
        <span className={style.username_in_caption}>{props.post.username}</span>{" "}
        <span className={style.caption_text}>{props.comment}</span>
        <div className={style.information_div}>
          <div className={style.date}>
            {timeAgo.format(Date.now() - newDate)}
          </div>
          {commentLike === 0 ? (
            ""
          ) : (
            <div className={style.comment_like}>{commentLike} Like</div>
          )}
          <div className={style.reply_button}>Reply</div>
        </div>
      </div>
      <div className={style.like_section}>
        {!like ? (
          <svg
            aria-label="Like"
            className={style.like_svg}
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
            onClick={() => {
              setLiked(true);
              setCommnetLike((commentLike += 1));
            }}
          >
            <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
          </svg>
        ) : (
          <svg
            aria-label="Unlike"
            className={style.like_svg}
            color="#ed4956"
            fill="#ed4956"
            height="12"
            role="img"
            viewBox="0 0 48 48"
            width="12"
            onClick={() => {
              setLiked(false);
              setCommnetLike((commentLike -= 1));
            }}
          >
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
          </svg>
        )}
      </div>
    </div>
  );
}

export default Comment;
