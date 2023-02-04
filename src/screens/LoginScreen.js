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

const LoginScreen = ( props ) => {
    const client = useApolloClient();
    const [loading, setLoading] = useState(false);
    const [value, onChangeText] = useState('Useless Placeholder');

    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');


    const actionLogin = async () => {
        if (inputEmail == '' || inputEmail == null || inputEmail == undefined) {
         
            Alert.alert(
                "Error",
                "Email is required",
                [
                { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
        else if(!EMAIL_REGX.test(inputEmail)){
            Alert.alert(
                "Error",
                "Enter valid email",
                [
                { text: "OK", onPress: () => console.log("OK Pressed") }
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
                "Error",
                "Password is required",
                [
                { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
      
        } else if(!PasswordRegex.test(inputPassword)){
            Alert.alert(
                "Error",
                "Password must be between 8 - 15 characters(Alpha Number with at least one Capital Letter and 1 Special Character)",
                [
                { text: "OK", onPress: () => console.log("OK Pressed") }
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
                                    placeholder="Enter Email ID"
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
                                    placeholder="Password"
                                    maxLength={15}
                                    secureTextEntry={true}
                                    placeholderTextColor="#086c2e"
                                />
                            </View>
                            
                            <View style={styles.inputBlock}>
                                <TouchableOpacity style={styles.loginBtWrap} onPress={actionLogin}>
                                    <View style={styles.loginButton}>
                                        <Text style={styles.loginButtonTxt}>Sign in</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                   

                </View>

            </KeyboardAwareScrollView>   
        </View>
    );
};

const mapStateToProps = ({ user }) => ({
    // userDetails: user.userDetails
});
  
const mapDispatchToProps = dispatch => ({
    storeUserDetails: inputs => dispatch(storeUserDetails(inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);