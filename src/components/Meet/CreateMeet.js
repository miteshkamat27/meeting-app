import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import {addMeeting} from "../../redux/actions/AppointmentActions";

export const CreateMeet = () => {
  const nameRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const attendeesRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const date = dateRef.current.value;
    const description =  descriptionRef.current.value;
    const attendees =  attendeesRef.current.value;
    const data = {
      id: new Date(),
      name,
      date,
      description,
      attendees,
      editing: false
    };
    dispatch(addMeeting(data))
    nameRef.current.value = '';
    dateRef.current.value = '';
    descriptionRef.current.value = '';
    attendeesRef.current.value = '';
  }
  return (
    <div className="meeting-container">
      <h1 className="meeting_heading">Create Meeting</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="date"
          id="meetingDate"
          name="meetingDate"
          ref={dateRef}
          min="2021-01-01"
          max="2021-12-31"
        /><br /><br />
        <input required type="text" ref={nameRef} 
          placeholder="Enter meeting Title"/>
        <br /><br />
        <textarea required rows="5" ref={descriptionRef} cols="28" 
          placeholder="Enter meeting description" />
        <br /><br />
        <input
            type="email"
            id="attendees"
            name="attendees"
            ref={attendeesRef}
            multiple
            required
          /> <br /><br />
        <button>Create</button>
      </form>
    </div>
  )
}