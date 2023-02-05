import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Alert,
  Platform,
  RefreshControl,
  Share,
  useColorScheme
} from 'react-native';
import RNRestart from 'react-native-restart';

import {useApolloClient} from '@apollo/client';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../styles/moreaccount';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {removeUserDetails} from '../redux/actions/userAuth';
import {languages} from '../locales/languages';
import {textColor} from '../constants/colors';
import {UserInfo} from '../../src/constants/config';

import AsyncStorage from '@react-native-community/async-storage';
import I18n from '../i18n';

const MoreScreen = props => {
  const client = useApolloClient();

  const {navigation} = props;
  console.log(Platform.OS);

  //  Language Update *********

  const {languageValue} = props;
  const [checked, setChecked] = React.useState(languageValue);

  useEffect(() => {
    languageChange();
  }, [checked]);

  const languageChange = async () => {
    await props.languageChanges(checked);
  };

  //**** Font Size Update  ************/
  const {fontSizeValue} = props;
  console.log('fontSizeValue:::', fontSizeValue);

  const [loading, setLoading] = useState(false);
  const [getName, setGetName] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    myProfileDetails();
  }, []);

  const myProfileDetails = async () => {
    let useDetailsTemp = await AsyncStorage.getItem(UserInfo);
    setGetName(useDetailsTemp);
    console.log('getList!!!!');
  };

  const _logout = async () => {
    console.log('out !!!!!');

    Alert.alert(
      languages[languageValue].Alert,
      languages[languageValue].Do_want_to_logout,
      [
        {
          text:languages[languageValue].Cancel,
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: languages[languageValue].OK, onPress: () => logoutval()},
      ],
      {cancelable: false},
    );
  };
  const logoutval = async () => {
    console.log('out !!!!!');
    try {
      await AsyncStorage.removeItem(UserInfo);
      RNRestart.Restart();

    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView
    style={styles.outer}>
            <Spinner
        visible={loading}
        color={textColor}
        textContent={''}
        textStyle={styles.spinnerTextStyle}
      />
      <TouchableOpacity
        style={styles.appBar}>
        <Image
          style={styles.appBarImg}     
          source={require('../assets/images/no_img22.png')}
        />
        <View style={styles.appBarTitle}>
          <Text style={styles.appBarTitleTextUp(fontSizeValue)}>{getName}</Text>
          <TouchableOpacity >
           
              <Text style={styles.appBarTitleTextDwn(fontSizeValue)}>
                {languages[languageValue].ViewProfile}
               
              </Text>
           
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      <ScrollView
        style={styles.scrollView}
        >
        <View style={styles.body}>
          

        <TouchableOpacity style={styles.contentBox} onPress={() => navigation.navigate('ChangeLanguage')}>
            <View style={styles.contentBoxView}>
             
              <View style={styles.contentBoxTextView5}>
                <Text style={styles.contentBoxText(fontSizeValue)}>
                  {languages[languageValue].ChangeLanguage}
                </Text>
              </View>
            </View>
            <View style={styles.arrowView}>
              <Image
                style={styles.rightarrow}
                source={require('../assets/images/rightarrow.png')}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contentBox} onPress={_logout}>
            <View style={styles.contentBoxView}>
             
              <View style={styles.contentBoxTextView5}>
                <Text style={styles.contentBoxText(fontSizeValue)}>
                  {languages[languageValue].Logout}
                </Text>
              </View>
            </View>
            <View style={styles.arrowView}>
              <Image
                style={styles.rightarrow}
                source={require('../assets/images/rightarrow.png')}
              />
            </View>
          </TouchableOpacity>

</View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = ({user, font, language}) => {
  console.log('mapStateToProps font ' + JSON.stringify(font));
  return {
    userDetails: user.userDetails,
    fontSizeValue: font.fontSize,
    languageValue: language.currentlanguage,
  };
};

const mapDispatchToProps = dispatch => {
  console.log(JSON.stringify(dispatch), 'jjj');
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MoreScreen);
