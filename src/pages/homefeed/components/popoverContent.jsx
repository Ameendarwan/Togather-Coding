import React from "react";
import HomefeedListItem from "./listItem";

export default function HomefeedPopoverContent({ handleCreate }) {
  return (
    <div className="homefeed-popver">
      <HomefeedListItem type={1} handleCreate={handleCreate} />
      <HomefeedListItem type={0} handleCreate={handleCreate} />
    </div>
  );
}
