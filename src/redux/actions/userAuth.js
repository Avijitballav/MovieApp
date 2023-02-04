
import AsyncStorage from '@react-native-community/async-storage';
import {BASE_URL,ImageURL,API_TOEKN} from '../../../src/constants/config';


const RESTORE_TOKEN = 'RESTORE_TOKEN';
const USER_SWITCHCOMMUNITY_PENDING = 'USER_SWITCHCOMMUNITY_PENDING';
const USER_SWITCHCOMMUNITY_SUCCESS = 'USER_SWITCHCOMMUNITY_SUCCESS';
const USER_SWITCHCOMMUNITY_ERROR = 'USER_SWITCHCOMMUNITY_ERROR';

const storeUserDetails = userToken => {
  return {type: RESTORE_TOKEN, payload: userToken};
};

const switch_communitiesList = (client) => {
  return async dispatch => {
    return new Promise(async (resolve, reject) => {
      dispatch({type: USER_SWITCHCOMMUNITY_PENDING});
      try {
      
        const urlpath=BASE_URL+"api_key="+API_TOEKN+"&language=en-US";
        console.log('urlpath', urlpath);

      fetch(urlpath, { method: 'GET'})
     .then((response) => response.json())
     .then((responseJson) => {
        console.log(responseJson);
        return resolve(responseJson);
        
     })
     .catch((error) => {
      dispatch({type: USER_SWITCHCOMMUNITY_ERROR, payload: error});
      reject();
     });

      } catch (error) {
        dispatch({type: USER_SWITCHCOMMUNITY_ERROR, payload: error});
        reject();
        return;
      }
    });
  };
};



export {
  RESTORE_TOKEN,
  USER_SWITCHCOMMUNITY_ERROR,
  USER_SWITCHCOMMUNITY_PENDING,
  storeUserDetails,
  switch_communitiesList
};
