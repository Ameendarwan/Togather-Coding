import React from "react";
import todoIcon from "assets/icons/Todo.svg";
import callAction from "assets/icons/Action.svg";
import "assets/scss/index.scss";

export default function HomefeedListItem({ type, className, handleCreate }) {
  return (
    <div
      className={`homefeed-list-item-container ${className}`}
      onClick={() => handleCreate(type)}
    >
      <img src={type ? callAction : todoIcon} alt="icon" />
      <span className="bold-text-18 pl-20">
        {type ? "Call to Action" : "Todo"}
      </span>
    </div>
  );
}
