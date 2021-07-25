import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <nav>
      <section>
      <Link to="/home/calendar">Dashboard</Link>
      <Link to="/home/appointment">Schedule Meeting</Link>
      <Link to="/home/all">All Meetings</Link>
      </section>
    </nav>
  );
};
