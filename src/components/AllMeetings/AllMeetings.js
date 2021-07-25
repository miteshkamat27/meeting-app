import React from 'react';
import { useSelector } from 'react-redux';
import {DisplayMeeting} from '../DisplayMeeting/DisplayMeeting';
import {EditMeet} from "../EditMeet/EditMeet";
// import { MeetingTable } from '../MeetingView/MeetingTable';

export const AllMeetings = () =>  {
  const all = useSelector(state => state.appointment)
  
  return (
    <div>
        <h1 className="all_meeting_heading">All Meetings</h1>
        {all.map((meet) => (
          <div key={meet.id}>
            {meet.editing ? <EditMeet meet={meet} key={meet.id} /> :
            <DisplayMeeting key={meet.id} meet={meet} />
            // <MeetingTable key={meet.id} meet={meet} />
            }
          </div>
        ))}
    </div>
  );
}