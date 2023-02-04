import { LANGUAGE_CHANGES,} from "../actions/languageActions";
  
  export const initialState = {
    loading: false,
    currentlanguage:'English'
  };

  const languageReducers = (state = initialState, { type, payload }) => {
    switch (type) {

        case LANGUAGE_CHANGES:
          console.log("languageReducers:::",payload);
            return { ...state, loading: false, currentlanguage: payload };

            default:
                return state;    

    }
}

export default languageReducers;