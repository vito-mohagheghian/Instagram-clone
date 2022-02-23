import React from "react";
import follow from "../../styles/followSuggest.module.css";
function Suggestion(props) {
  return (
    <div className={follow.suggestion}>
      <div className={follow.suggestion_img_div}>
        <img src={props.porofile} alt="" className={follow.suggestion_img} />
      </div>
      <div className={follow.suggestion_details}>
        <h6 className={follow.suggestion_username}>{props.username}</h6>
        <h6 className={follow.suggestion_followed}>{props.detail}</h6>
      </div>
      <div
        onClick={() => {
          alert("This feature is disabled.");
        }}
        className={follow.suggestion_follow_button}
      >
        Follow
      </div>
    </div>
  );
}

export default Suggestion;