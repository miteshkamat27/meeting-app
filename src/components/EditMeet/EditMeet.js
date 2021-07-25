import React, {useRef} from "react";
import { useDispatch } from "react-redux";
import {updateMeeting} from "../../redux/actions/AppointmentActions";

export const EditMeet = ({meet}) => {
  const nameRef = useRef();
  const dateRef = useRef();
  const descriptionRef = useRef();
  const attendeesRef = useRef();
  const dispatch = useDispatch();
  const handleEdit = (e) => {
    e.preventDefault();
    const editedName = nameRef.current.value;
    const editedDate = dateRef.current.value;
    const editedDescription =  descriptionRef.current.value;
    const editedAttendees =  attendeesRef.current.value;
    const data = {
      id: new Date(),
      editedName,
      editedDate,
      editedDescription,
      editedAttendees,
    };
    dispatch(updateMeeting(meet.id,data));
    nameRef.current.value = '';
    dateRef.current.value = '';
    descriptionRef.current.value = '';
    attendeesRef.current.value = '';
  }
  return (
    <div className="display_meeting">
      <h1>Edit Meeting</h1>
      <form className="form" onSubmit={handleEdit}>
        <input
          type="date"
          id="meetingDate"
          name="meetingDate"
          defaultValue={meet.date}
          ref={dateRef}
          min="2021-01-01"
          max="2021-12-31"
        /><br/><br/>
        <input required type="text" ref={nameRef} defaultValue={meet.name}
          placeholder="Enter meeting Title"/>
        <br /><br />
        <textarea required rows="5" ref={descriptionRef} cols="28" defaultValue={meet.description}
          placeholder="Enter meeting description" />
        <br /><br />
        <input
            type="email"
            id="attendees"
            name="attendees"
            defaultValue={meet.attendees}
            ref={attendeesRef}
            multiple
            required
          /> <br /><br />
        <button>Update</button>
      </form>
    </div>
  )
}