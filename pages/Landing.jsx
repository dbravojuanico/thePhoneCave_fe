import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to={"/phones"}>Check the phone list!</Link>
    </div>
  );
}

export default Landing;
