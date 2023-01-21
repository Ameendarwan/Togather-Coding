import React, { useRef } from "react";
import HomefeedListItem from "./components/listItem";
import deleteIconOn from "assets/icons/Bin-on.svg";
import deleteIconOff from "assets/icons/Bin-off.svg";
import eyeIconOn from "assets/icons/Eye-on.svg";
import eyeIconOff from "assets/icons/Eye-off.svg";
import eyeIconOffDisabled from "assets/icons/Eye-off-disabled.svg";
import menuIconOn from "assets/icons/Menu-on.svg";
import menuIconOff from "assets/icons/Menu-off.svg";

export default function ListView({ hidden }) {
  const deleteIconRef = useRef();
  const eyeIconRef = useRef();
  const menuIconRef = useRef();

  const handleHover = () => {
    deleteIconRef.current.src = deleteIconOn;
    eyeIconRef.current.src = eyeIconOn;
    menuIconRef.current.src = menuIconOn;
  };

  const handleLeave = () => {
    deleteIconRef.current.src = deleteIconOff;
    eyeIconRef.current.src = eyeIconOff;
    menuIconRef.current.src = menuIconOff;
  };

  return (
    <div
      className="homefeed-list-view"
      onMouseOver={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="homefeed-list-view-left">
        <img src={menuIconOff} alt="menu" ref={menuIconRef} />
        <HomefeedListItem type={0} />
      </div>
      <div className="homefeed-list-view-right">
        <img
          src={deleteIconOff}
          alt="delete"
          ref={deleteIconRef}
          className="pr-20"
        />
        <img
          src={hidden ? eyeIconOffDisabled : eyeIconOff}
          alt="view"
          ref={eyeIconRef}
        />
      </div>
    </div>
  );
}
