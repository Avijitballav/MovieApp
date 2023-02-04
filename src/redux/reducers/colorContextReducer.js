
  
  export const initialState = {
    colorMode: 'light'
  };

  const handleColorMode = (state = initialState, { type, payload }) => {
    switch (type) {

        case 'color_mode_value':
          console.log("fontsizeReducers:::",payload);
            return { ...state, colorMode: payload.value };

            default:
                return state;    

    }
}

export default handleColorMode;