import AsyncStorage from "@react-native-community/async-storage";


const FONT_SIZE_CHANGES = 'FONT_SIZE_CHANGES';

const fontsizeChanges = (fontsize) => {
    console.log("darkmode Action:::",fontsize);
    return async (dispatch) => {
        await AsyncStorage.setItem('fontsize', JSON.stringify({fontsize_key: fontsize}));
        return dispatch({ type: FONT_SIZE_CHANGES, payload: fontsize} );
    }
}

export { FONT_SIZE_CHANGES,fontsizeChanges}