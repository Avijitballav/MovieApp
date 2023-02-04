//color_mode_value

const setColorMode = (value) => {
    console.log("darkmode Action:::",fontsize);
    return (dispatch) => {
        //await AsyncStorage.setItem('fontsize', JSON.stringify({fontsize_key: fontsize}));
        return dispatch({ type: 'color_mode_value', payload: value} );
    }
}

export { setColorMode}