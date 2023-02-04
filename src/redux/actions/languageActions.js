import AsyncStorage from "@react-native-community/async-storage";


const LANGUAGE_CHANGES = 'LANGUAGE_CHANGES';

const languageChanges = (language) => {
    console.log("language Action:::",language);
    return async (dispatch) => {
        await AsyncStorage.setItem('language', JSON.stringify({language_key: language}));
        return dispatch({ type: LANGUAGE_CHANGES, payload: language} );
    }
}

export { LANGUAGE_CHANGES,languageChanges}