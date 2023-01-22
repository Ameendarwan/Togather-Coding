import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import { ReactSortable } from "react-sortablejs";
import HomefeedListItem from "./components/listItem";
import Preview from "./components/preview";
import HomefeedHeader from "./components/header";
import ListView from "./listView";
import MobilePreview from "./mobilePreview";
import { findByIndex } from "utils/findIndex";
import "./style.scss";

export default function Homefeed() {
  const [data, setData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCreate = (type) => {
    setAnchorEl(null);
    let items = [...data];
    let addItem = {
      id: Date.now(),
      type,
      hidden: false,
    };
    items.push(addItem);
    setData(items);
  };

  const handleList = (id, actionType) => {
    let items = [...data];
    let index = findByIndex(items, "id", id);
    if (index > -1) {
      if (actionType) items.splice(index, 1);
      else items[index].hidden = !items[index].hidden;
    }
    setData(items);
  };

  return (
    <Grid container className="homefeed" justifyContent={"space-between"}>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <div className="homefeed-container">
          <HomefeedHeader
            handleCreate={handleCreate}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
          />
          <Preview />
          <Divider />
          <div className="mt-15 p-20">
            <HomefeedListItem type={1} />
            <HomefeedListItem type={0} className="mt-40" />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3} className="mt-75">
        <ReactSortable list={data} setList={setData}>
          {data?.map((val) => (
            <div className="my-15" key={val.id}>
              <ListView item={val} handleList={handleList} />
            </div>
          ))}
        </ReactSortable>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={3} xl={2.5} className="my-auto">
        <MobilePreview data={data} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={2} xl={1.5} />
    </Grid>
  );
}
