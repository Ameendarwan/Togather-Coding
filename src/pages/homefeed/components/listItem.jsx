import React from "react";
import todoIcon from "assets/icons/Todo.svg";
import callAction from "assets/icons/Action.svg";
import "assets/scss/index.scss";

function HomefeedListItem({ type, className, handleCreate, titleClass, img }) {
  const displayIcon = type ? callAction : todoIcon;
  return (
    <div
      className={`homefeed-list-item-container ${className}`}
      onClick={() => handleCreate(type)}
    >
      <img src={img ?? displayIcon} alt="icon" />
      <span className={`${titleClass ?? "bold-text-18"} pl-10`}>
        {type ? "Call to Action" : "Todo"}
      </span>
    </div>
  );
}

export default React.memo(HomefeedListItem);
