import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_MEETING:
      return [...state, action.meeting];
    case actionTypes.EDIT_MEETING: {
      return state.map((meet) => meet.id === action.id ? {...meet, editing: !meet.editing}: meet);
    }
    case actionTypes.UPDATE_MEETING: 
      return state.map((meet) => {
        if(meet.id === action.id){
          return {
            ...meet,
            name:action.data.editedName,
            date: action.data.editedDate,
            description:action.data.editedDescription,
            attendees: action.data.editedAttendees,
            editing: !meet.editing
          }
        } else {
          return meet;
        }
      })
    // case actionTypes.FETCH_MEETING_DETAILS:
    //   return state.filter((meet) => meet.date === action.id)

    default:
      return state;
  }
};
