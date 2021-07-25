import React from "react";
import { useDispatch } from "react-redux";
import { editMeeting } from "../../redux/actions/AppointmentActions";

export const MeetInfo = ({details}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editMeeting(details.id));
  }
  return (
    <div className="display_meeting">
      <h2 className="display_meeting_title">{details.name}</h2>
      <h4 className="display_meeting_title">{details.date}</h4>
      <p className="display_meeting_message">{details.description}</p>
      <p className="display_meeting_message">{details.attendees}</p>
      {/* <button className="edit" onClick={handleEdit}>Edit</button> */}
    </div>
  );
};
