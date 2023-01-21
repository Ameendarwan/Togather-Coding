import React from "react";
import HomefeedListItem from "./listItem";
import todoSmallIcon from "assets/icons/Todo-small.svg";
import actionSmallIcon from "assets/icons/Action-small.svg";

export default function HomefeedPopoverContent({ handleCreate }) {
  return (
    <div className="homefeed-popver">
      <HomefeedListItem
        type={1}
        handleCreate={handleCreate}
        className="homefeed-popver-item-container cursor-pointer"
        titleClass="normal-text-16"
        img={actionSmallIcon}
      />
      <HomefeedListItem
        type={0}
        handleCreate={handleCreate}
        className="homefeed-popver-item-container cursor-pointer"
        titleClass="normal-text-16"
        img={todoSmallIcon}
      />
    </div>
  );
}
