import React from "react";
import { Popover } from "@mui/material";
import HomefeedPopoverContent from "./popoverContent";
import homefeedIcon from "assets/icons/Homefeed2.svg";
import addIcon from "assets/icons/Add.svg";

function HomefeedHeader({ handleCreate, anchorEl, setAnchorEl }) {
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="homefeed-header mt-30">
      <div className="homefeed-header-left">
        <img src={homefeedIcon} alt="homefeed" />
        <span className="homefeed-header-title">Homefeed</span>
      </div>
      <div className="homefeed-add">
        <img
          src={addIcon}
          alt="add"
          onClick={handleClick}
          className="homefeed-add-img"
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <HomefeedPopoverContent handleCreate={handleCreate} />
        </Popover>
      </div>
    </div>
  );
}

export default React.memo(HomefeedHeader);
