import React from "react";
import mobileHomeIcon from "assets/icons/Mobile-home.svg";
import mobileMembersIcon from "assets/icons/Mobile-members.svg";
import mobileInboxIcon from "assets/icons/Mobile-inbox.svg";

export default function MobileFooter() {
  return (
    <div className="homefeed-mobile-sub-container-bottom-part">
      <div className="homefeed-mobile-sub-container-bottom-part-body">
        <img src={mobileHomeIcon} alt="home" />
        <img
          src={mobileMembersIcon}
          alt="members"
          className="homefeed-mobile-sub-container-bottom-part-center-img"
        />
        <img src={mobileInboxIcon} alt="inbox" />
      </div>
    </div>
  );
}
