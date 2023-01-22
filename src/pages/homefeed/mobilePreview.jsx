import React from "react";
import { Divider, Skeleton } from "@mui/material";
import mobileUserIcon from "assets/icons/Mobile-user.svg";
import mobileCheckIcon from "assets/icons/Mobile-check.svg";
import CallToAction from "./components/callToAction";
import MobileListItem from "./components/mobileListItem";
import MobileFooter from "./components/mobileFooter";

function MobilePreview({ data }) {
  return (
    <div className="homefeed-mobile">
      <div className="homefeed-mobile-main-container">
        <div className="homefeed-mobile-sub-container">
          <div className="homefeed-mobile-sub-container-top-part">
            <div className="homefeed-mobile-sub-container-top-part-body mt-20">
              <img src={mobileUserIcon} alt="user" />
              <img src={mobileCheckIcon} alt="check" />
            </div>
          </div>

          <div className="homefeed-mobile-sub-container-body">
            <div className="homefeed-mobile-sub-container-body-msgs-container">
              <span className="homefeed-mobile-sub-container-body-msgs-container-label">
                New messages
              </span>
              <div className="display-flex align-items-center mt-20">
                <Skeleton variant="circular" width={45} height={39} />
                <div className="full-width pl-10">
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.2rem" }}
                    width={70}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.2rem" }}
                    width={150}
                  />
                </div>
              </div>
            </div>

            <div className="homefeed-mobile-sub-container-body-msgs-container mt-20 mb-10">
              <span className="homefeed-mobile-sub-container-body-msgs-container-label">
                Group RSVPs
              </span>
              <div className="display-flex align-items-center mt-10 justify-content-between">
                <div className="full-width">
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1.2rem" }}
                    width={150}
                  />
                  <Skeleton
                    variant="text"
                    width={70}
                    sx={{ fontSize: "1.2rem" }}
                  />
                </div>
                <Skeleton
                  variant="text"
                  width={90}
                  height={70}
                  sx={{ borderRadius: "42%" }}
                />
              </div>
            </div>

            <Divider />

            {data
              ?.filter((obj) => !obj.hidden) // To only show visible items
              ?.map((val) => (
                <div className="my-20" key={val.id}>
                  {val.type ? (
                    <CallToAction id={val.id} classes="my-10" />
                  ) : (
                    <MobileListItem id={val.id} classes="my-10" />
                  )}
                </div>
              ))}
          </div>

          <MobileFooter />
        </div>
      </div>
    </div>
  );
}

export default React.memo(MobilePreview);
