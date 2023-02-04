/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { useEffect, useState, useMemo } from 'react';
 import {LogBox} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { RootStackScreen } from './navigation/RootNavigator';
 import {useSelector, useDispatch } from 'react-redux';
 import { UserInfo} from './constants/config';
 import {storeUserDetails} from './redux/actions/userAuth';
 import AsyncStorage from '@react-native-community/async-storage';

 import SplashScreen from 'react-native-splash-screen';

 import { languageChanges } from './redux/actions/languageActions';
 import { connect } from 'react-redux';

 const App = (props) => {
   const dispatch = useDispatch();
   let languagepdate = 'English'

   const isUserLoggedIn = useSelector(state => {
     console.log("userDetails:: ",  state.user.userDetails);
     return state.user.userDetails
   });
 
   useEffect(() => {
     // Fetch the token from storage then navigate to our appropriate place
     const bootstrapAsync = async () => {
      
      try {
         //******* User Details ****** */ 
         let useDetailsTemp = await AsyncStorage.getItem(UserInfo);     
         console.log("useDetails",useDetailsTemp);
        dispatch(storeUserDetails(useDetailsTemp));

         //**** Language Update ***** */
         languagepdate = await AsyncStorage.getItem('language');
         console.log("language_key", JSON.parse(languagepdate).language_key);
         await props.s(JSON.parse(languagepdate).language_key);
         
       } catch (e) {
         // Restoring token failed
       }
     };
 
     bootstrapAsync();
     SplashScreen.hide();
     LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
   }, []);
 

 
   const MainNavigationContainer = useMemo(
     () => (
       <NavigationContainer>
         <RootStackScreen
           isUserLoggedIn={isUserLoggedIn}
         />
       </NavigationContainer>
     ),
     [
       isUserLoggedIn,
     ]
   );
 
 
   return (
     <>
       {MainNavigationContainer}
     </>
   );
 };

 const mapDispatchToProps = dispatch => ({
   languageChanges: (inputs) => dispatch(languageChanges(inputs))
 });
 
 
 export default connect(mapDispatchToProps)(App);
 
 // export default App;
 