import React from "react";
import Sidebar from "../Sidebar";

function Plots(props) {
  return (
    <div>
      <Sidebar />
      <h2>plot {props.match.params.id}</h2>
    </div>
  );
}

export default Plots;
