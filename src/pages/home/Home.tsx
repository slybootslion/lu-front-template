import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  return (
    <nav style={ { width: "60%", margin: "auto" } }>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
