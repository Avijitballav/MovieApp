import {RESTORE_TOKEN } from "../../actions/userAuth";

export const initialState = {
  loading: false,
  userDetails: null,
 
};
  
const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {

       
        case RESTORE_TOKEN:
          return { ...state, loading: false, userDetails: payload };
  

        default:
        return state;
    }
};
  
export default UserReducer;