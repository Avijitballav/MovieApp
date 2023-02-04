import axios from 'axios';
import Toast from 'react-native-simple-toast';


const ImageURL = 'https://image.tmdb.org/t/p/w500'
const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?';

const API_TOEKN = '1f44f917b1ca57adc7a5d512f854b647';
const UserInfo='UserInfo';
const EMAIL_REGX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,15})");

const URL = 'https://image.tmdb.org/t/p/w500'
const ACCESS_TOEKN= '1f44f917b1ca57adc7a5d512f854b647';


const showToast = (message) => {
    // Toast.show(message, Toast.LONG)
    Toast.showWithGravity(message, Toast.SHORT, Toast.CENTER);
}



export { BASE_URL,API_TOEKN,ImageURL, PasswordRegex,showToast, ACCESS_TOEKN, UserInfo,EMAIL_REGX,URL}