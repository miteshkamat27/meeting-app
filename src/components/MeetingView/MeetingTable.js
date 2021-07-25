import React from "react";
import { useDispatch } from "react-redux";
import {editMeeting} from "../../redux/actions/AppointmentActions";

export const MeetingTable = ({meet}) =>{
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editMeeting(meet.id));
  }
 
  return(
    <table>
      <thead>
        <tr>
          <th>Meeting Name</th>
          <th>Meeting description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {meet.length > 0 ? (
          meet.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>
                <button className="edit" onClick={handleEdit}>Edit</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )  
} 