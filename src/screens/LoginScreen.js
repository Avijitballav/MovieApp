import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import styles from '../styles/login1'
import AsyncStorage from '@react-native-community/async-storage';
import { useApolloClient } from '@apollo/client';
import { storeUserDetails } from '../redux/actions/userAuth';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import { EMAIL_REGX,UserInfo,PasswordRegex } from '../../src/constants/config';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import I18n from '../i18n';
import {languages} from '../locales/languages';

const LoginScreen = ( props ) => {
    const client = useApolloClient();
    const [loading, setLoading] = useState(false);
    const [value, onChangeText] = useState('Useless Placeholder');

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    //  Language Update *********

    const {languageValue} = props;
  console.log('Current Lan:::', languages[languageValue].Home);

    const actionLogin = async () => {
        if (inputEmail == '' || inputEmail == null || inputEmail == undefined) {
         
            Alert.alert(
                languages[languageValue].Alert,
                languages[languageValue].Email_is_required,
                [
                { text: languages[languageValue].OK, onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else if(!EMAIL_REGX.test(inputEmail)){
            Alert.alert(
                languages[languageValue].Alert,
                languages[languageValue].Enter_valid_email,
                [
                { text: languages[languageValue].OK, onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else if (
            inputPassword == '' ||
            inputPassword == null ||
            inputPassword == undefined
        ) {
            Alert.alert(
                languages[languageValue].Alert,
                languages[languageValue].Password_is_required,
                [
                { text: languages[languageValue].OK, onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
      
        } else if(!PasswordRegex.test(inputPassword)){
            Alert.alert(
                languages[languageValue].Alert,
                languages[languageValue].Password_must_be,
                [
                { text: languages[languageValue].OK, onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else {
            // setLoading(true)
            try {
                console.log("response log", {inputEmail, inputPassword });
                await AsyncStorage.setItem(UserInfo,inputEmail);
                await props.storeUserDetails(inputEmail);           
            } catch (e) {
                console.log("err log", e);
            }
        }
      };

    
    return (
        <View style={styles.container}>
                    <Spinner
                        visible={loading}
                        textContent={''}
                        textStyle={styles.spinnerTextStyle}
                    />
            <KeyboardAwareScrollView style={styles.scrollView}>
                <View style={styles.loginWrap}>

                <View style={styles.tabContent}>
                            <View style={styles.inputBlock}>
                                <TextInput
                                    value={inputEmail}
                                    multiline={false}
                                    onChangeText={text => {
                                        setInputEmail(text);
                                        console.log(inputEmail);
                                    }}
                                    style={styles.inputTxt}
                                    placeholder= {languages[languageValue].Enteryouremail}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    placeholderTextColor="#086c2e"

                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <TextInput
                                    value={inputPassword}
                                    onChangeText={text => {
                                        setInputPassword(text);
                                    }}
                                    style={styles.inputTxt} 
                                    placeholder={languages[languageValue].Enteryourpassword}
                                    maxLength={15}
                                    secureTextEntry={true}
                                    placeholderTextColor="#086c2e"
                                />
                            </View>
                            
                            <View style={styles.inputBlock}>
                                <TouchableOpacity style={styles.loginBtWrap} 
                                onPress={actionLogin}>
                                    <View style={styles.loginButton}>
                                        <Text style={styles.loginButtonTxt}>{languages[languageValue].submit}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                   

                </View>

            </KeyboardAwareScrollView>   
        </View>
    );
};

const mapStateToProps = ({language}) => {
    console.log('language ' + language.currentlanguage);
    return {  
      languageValue: language.currentlanguage,
    };
  };
  
const mapDispatchToProps = dispatch => ({
    storeUserDetails: inputs => dispatch(storeUserDetails(inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);