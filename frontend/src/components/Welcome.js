import { useEffect, useState } from "react";
import axios from "axios";
import actions from "../api";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <nav>
        <Link to="/">Welcome Page</Link>
        <Link to="/hub">My Hub</Link>
        <Link to="/Auth">Log-in/Sign-up</Link>
      </nav>
      <h1>Hub</h1>
    </div>
  );
}

export default Welcome;
