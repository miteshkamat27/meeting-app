import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login/index";
import { Home } from "./components/Home";
import {Appointment} from "./components/Appointment/Appointment";
import {AllMeetings} from "./components/AllMeetings/AllMeetings";
import { Calendar } from "./components/Calendar/Calendar";
import { MeetInfo } from "./components/MeetInfo/MeetInfo";

import "./styles.css";
import "./App.css";
import { ProtectedRoute } from "./routes";
import { Navbar } from "./components/Navbar";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <div className="App">
      
      <Router>
        <div className="navbar center">
          <Navbar />
        </div>
        
        <Switch>
          <Route exact path="/" component={Login} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/home/appointment" component={Appointment} />
          <ProtectedRoute exact path="/home/all" component={AllMeetings} />
          <ProtectedRoute exact path="/home/calendar" component={Calendar} />
          <Route exact path="/home/meetInfo/:id" component={MeetInfo} />
        </Switch>
      </Router>
    </div>
  );
}
