import * as actionTypes from "./actionTypes";

export const createMeeting = (meeting) => {
  return {
    type: actionTypes.CREATE_MEETING,
    meeting: meeting
  };
};

export const updateMeeting = (id, meeting) => {
  return {
    type: actionTypes.UPDATE_MEETING,
    id: id,
    meeting: meeting
  };
};

