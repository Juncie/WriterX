import React from "react";
import Sidebar from "../Sidebar";

function Plots(props) {
  const { id } = props.match.params._id;
  console.log(id);
  return (
    <div>
      <Sidebar />
    </div>
  );
}

export default Plots;
