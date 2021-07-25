import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Modal } from "../Modal/index";
import {getMonth, daysInMonth, weekCount} from "../../utils/services/DateUtil";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const current = new Date();
const currentMonth = current.getMonth() + 1;
const currentYear = current.getFullYear();
const noOfDays = daysInMonth(current);

let month = getMonth(currentMonth);
let noOfWeeks = weekCount(currentYear, currentMonth);

export const Calendar = () => {
  const [modal, setModal] = useState(false);
  const all = useSelector((state) => state.appointment);
  const [meet, setMeet] = useState(true);
  const [selection, setSelection] = useState(null);
  const [dot, setDot] = useState(false);
  let details = useSelector(state => state.appointment.find(item => item.date.split("-")[2] === selection));
  const handleClick = (e) => {
    setSelection(e.target.innerHTML);
    
    if(details){
      setModal((prev) => !prev);
    }
  };
  // const checkMeetingExists = (checkDate) => {
  //   let status = all.find(item => item.date.split("-")[2] === checkDate)
  //   if(status){
  //     setDot(true);
  //   }else {
  //     setDot(false);
  //   }

  // }
  const RenderHeaderRow = () => {
    return (
      <tr>
        {days.map((day, index) => {
          return <th key={index}>{day}</th>;
        })}
      </tr>
    );
  };
  
  return (
    <div className="table-wrapper">
      {modal ? <Modal details={details} /> : null}
      <h3>{month} {currentYear}</h3>
      <table>
        <tbody onClick={handleClick}>
          {<RenderHeaderRow />}      
          <tr>
            <td>
              {/* {meet ? (
                <Link to={`/home/meetInfo/25`} className="button">
                  <span>25</span>
                  <span className="dot"></span>
                </Link>
              ) : ( */}
                <span>25</span>
              {/* )} */}
            </td>
            <td>
              {/* {meet ? (
                <Link to={`/home/meetInfo/26`} className="button">
                  <span>26</span>
                  <span className="dot"></span>
                </Link>
              ) : ( */}
                <span>26</span>
              {/* )} */}
            </td>
            <td>
              <span>27</span>
            </td>
            <td>
              <span>28</span>
              {/* {checkMeetingExists(28) ? <span className="dot"></span> : null} */}
            </td>
            <td>
              <span>29</span>
            </td>
            <td>
              <span>30</span>
            </td>
            <td>
              <span>31</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>2</span>
            </td>
            <td>
              <span>3</span>
            </td>
            <td>
              <span>4</span>
            </td>
            <td>
              <span>5</span>
            </td>
            <td>
              <span>6</span>
            </td>
            <td>
              <span>7</span>
            </td>
          </tr>
          <tr>
            <td>
              <span>8</span>
            </td>
            <td>
              <span>9</span>
            </td>
            <td>
              <span>10</span>
            </td>
            <td>
              <span>11</span>
            </td>
            <td>
              <span>12</span>
            </td>
            <td>
              <span>13</span>
            </td>
            <td>
              <span>14</span>
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
          </tr>
          <tr>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
