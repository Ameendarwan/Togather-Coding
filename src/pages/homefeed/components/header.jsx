import React, { useState } from "react";
import { Popover } from "@mui/material";
import HomefeedPopoverContent from "./popoverContent";
import homefeedIcon from "assets/icons/Homefeed2.svg";
import addIcon from "assets/icons/Add.svg";

export default function HomefeedHeader({ handleCreate }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="homefeed-header">
      <div className="display-flex align-items-center">
        <img src={homefeedIcon} alt="homefeed" />
        <span className="homefeed-title">Homefeed</span>
      </div>
      <div className="homefeed-add">
        <img src={addIcon} alt="add" onClick={handleClick} />
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
