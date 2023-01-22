import React from "react";
import todoMobile from "assets/icons/Mobile-todo.svg";
export default function MobileListItem({ id }) {
  return (
    <div className="homefeed-mobile-sub-container-body-todo-container" key={id}>
      <img src={todoMobile} alt="todo" />
      <span>New todo item</span>
    </div>
  );
}
