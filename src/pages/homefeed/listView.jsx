import React, { useRef } from "react";
import HomefeedListItem from "./components/listItem";
import deleteIconOn from "assets/icons/Bin-on.svg";
import deleteIconOff from "assets/icons/Bin-off.svg";
import eyeIconOn from "assets/icons/Eye-on.svg";
import eyeIconOff from "assets/icons/Eye-off.svg";
import eyeIconOffDisabled from "assets/icons/Eye-off-disabled.svg";
import eyeIconOnDisabled from "assets/icons/Eye-on-disabled.svg";
import menuIconOn from "assets/icons/Menu-on.svg";
import menuIconOff from "assets/icons/Menu-off.svg";

export default function ListView({ item, handleList }) {
  const deleteIconRef = useRef();
  const eyeIconRef = useRef();
  const menuIconRef = useRef();

  const handleHover = () => {
    deleteIconRef.current.src = deleteIconOn;
    eyeIconRef.current.src = item.hidden ? eyeIconOnDisabled : eyeIconOn;
    menuIconRef.current.src = menuIconOn;
  };

  const handleLeave = () => {
    deleteIconRef.current.src = deleteIconOff;
    eyeIconRef.current.src = item.hidden ? eyeIconOffDisabled : eyeIconOff;
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
        <HomefeedListItem type={item.type} />
      </div>
      <div className="homefeed-list-view-right">
        <img
          src={deleteIconOff}
          alt="delete"
          ref={deleteIconRef}
          className="pr-20"
          onClick={() => handleList(item.id, 1)}
        />
        <img
          src={item.hidden ? eyeIconOffDisabled : eyeIconOff}
          alt="view"
          ref={eyeIconRef}
          onClick={() => handleList(item.id, 0)}
        />
      </div>
    </div>
  );
}
