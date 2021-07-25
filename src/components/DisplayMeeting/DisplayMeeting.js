import React from "react";
import { useDispatch } from "react-redux";
import {editMeeting} from "../../redux/actions/AppointmentActions";

export const DisplayMeeting = ({ meet}) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editMeeting(meet.id));
  }
  return (
    <div className="display_meeting">
      <p className=""><strong>Meeting Name:</strong>  {meet.name}</p>
      <p className=""><strong>Meeting Date:</strong>  {meet.date} </p>
      <p className=""><strong>Description:</strong>  {meet.description} </p>
      <p className=""><strong>Attendees:</strong>  {meet.attendees} </p>
      <button className="edit" onClick={handleEdit}>Edit</button>
    </div>
  )
}