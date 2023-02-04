import { FONT_SIZE_CHANGES,} from "../actions/fontsizeActions";
  
  export const initialState = {
    loading: false,
    fontSize: 0
  };

  const fontsizeReducers = (state = initialState, { type, payload }) => {
    switch (type) {

        case FONT_SIZE_CHANGES:
          console.log("fontsizeReducers:::",payload);
            return { ...state, loading: false, fontSize: payload };

            default:
                return state;    

    }
}

export default fontsizeReducers;