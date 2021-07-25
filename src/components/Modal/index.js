import React, { useState } from "react";

export const Modal = ({ details }) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <div className="display_meeting">
              <p className=""><strong>Meeting Name:</strong>  {details.name}</p>
              <p className=""><strong>Meeting Date:</strong>  {details.date} </p>
              <p className=""><strong>Description:</strong>  {details.description} </p>
              <p className=""><strong>Attendees:</strong>  {details.attendees} </p>
              {/* <button className="edit" onClick={handleEdit}>Edit</button> */}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
