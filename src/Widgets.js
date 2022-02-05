import React from "react";
import "./Widgets.css";
import { Avatar } from "@material-ui/core";

function Widgets() {
  const newArticle = (heading, subtitle, src) => (
    <div className="widgets__article">
      <div className="widget__articleLeft">
        <Avatar src={src} />
      </div>
      <div className="widget__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
        <button> + Follow</button>
      </div>
    </div>
  );
  return (
    <div className="rightbar">
      <div className="widgets">
        <div className="widgets__header">
          <h2>Add to your feed</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            width="16"
            height="16"
            focusable="false"
          >
            {" "}
            <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>{" "}
          </svg>
        </div>
        {newArticle(
          "PT. Pertamina (Persero)",
          "Company.Oil & Energy",
          "https://cdn.kibrispdr.org/data/download-logo-pertamina-png-1.jpg"
        )}
        {newArticle(
          "Instagram",
          "Company.Computer Software",
          "https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584852.png"
        )}
        {newArticle(
          "Twitter",
          "Company.Social Network",
          "https://www.unukaltim.ac.id/wp-content/uploads/2019/12/logo-twitter-png-47448.png?w=640"
        )}
      </div>
      <div className="widget_bottom">
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </div>
      <p>Copyright © AdheCode 2022</p>
    </div>
  );
}

export default Widgets;
