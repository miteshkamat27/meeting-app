import * as actionTypes from "./actionTypes";

export const addMeeting = (meeting) => {
  return {
    type: actionTypes.ADD_MEETING,
    meeting: meeting
  };
};

export const editMeeting = (id) => {
  return {
    type: actionTypes.EDIT_MEETING,
    id: id,
  };
};

export const updateMeeting = (id, data) => {
  return {
    type: actionTypes.UPDATE_MEETING,
    id: id,
    data: data
  };
};
export const fetchMeetingDetails = (id) => {
  return {
    type: actionTypes.FETCH_MEETING_DETAILS,
    id: id
  };
};
