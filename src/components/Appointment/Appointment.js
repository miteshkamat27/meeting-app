import React, {useState} from 'react';
import {AllMeetings} from "../AllMeetings/AllMeetings";
import {CreateMeet} from "../Meet/CreateMeet";

export const Appointment = () =>  {
  return (
    <div className="center">
      <div className="">
        <CreateMeet />
      </div>
        {/* <div className="col-50">
         <AllMeetings />
        </div> */}
    </div>
  );
}