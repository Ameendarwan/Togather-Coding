import React from "react";
import mobileActionIcon from "assets/icons/Mobile-action.svg";

export default function CallToAction({ id }) {
  return (
    <div
      className="homefeed-mobile-sub-container-body-action-container mt-20"
      key={id}
    >
      <img
        src={mobileActionIcon}
        alt="action"
        className="homefeed-mobile-sub-container-body-action-container-image"
      />
      <div className="text-center p-20">
        <a href="https://www.google.com/" target={"blank"}>
          <button className="homefeed-mobile-sub-container-body-action-container-btn">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
}
