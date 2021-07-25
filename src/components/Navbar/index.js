import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/home/calendar">Dashboard</Link>
      </li>
      <li>
        <Link to="/home/appointment">Schedule Meeting</Link>
      </li>
      <li>
        <Link to="/home/all">All Meetings</Link>
      </li>
    </ul>
  </nav>
);
