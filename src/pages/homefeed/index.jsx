import React, { useState } from "react";
import { Divider, Grid } from "@mui/material";
import HomefeedListItem from "./components/listItem";
import Preview from "./components/preview";
import HomefeedHeader from "./components/header";
import ListView from "./listView";
import "./style.scss";

export default function Homefeed() {
  const [data, setData] = useState([]);
  const handleCreate = () => {
    console.log("YES");
  };
  return (
    <Grid container className="homefeed" justifyContent={"space-between"}>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <div className="homefeed-container">
          <HomefeedHeader handleCreate={handleCreate} />
          <Preview />
          <Divider />
          <div className="mt-20">
            <HomefeedListItem type={1} />
            <HomefeedListItem type={0} className="mt-15" />
          </div>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3} className="mt-75">
        {Array(5)
          .fill("")
          .map((val) => (
            <div className="my-20" key={val}>
              <ListView />
            </div>
          ))}
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={5} xl={5} />
    </Grid>
  );
}
