import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";
import { Link } from "react-router-dom";



function Home() {

  return (
      <div>
        <nav>
          <h1>Hub</h1>
          <Link to="/">Welcome Page</Link>
          <Link to="/home">Home</Link>
          <Link to="/hub">My Hub</Link>

        </nav>
      </div>
  );
}

export default Home;
