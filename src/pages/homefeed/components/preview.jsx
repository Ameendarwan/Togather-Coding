import React from "react";
import previewIcon from "assets/icons/Preview.svg";

export default function Preview() {
  return (
    <div className="homefeed-preview mt-30 mb-20">
      <img src={previewIcon} alt="preview" />
      <span className="bold-text-18 pl-20">Live Preview</span>
    </div>
  );
}
