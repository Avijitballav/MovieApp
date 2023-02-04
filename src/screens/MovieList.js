import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
  ImageBackground
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useApolloClient} from '@apollo/client';
import Spinner from 'react-native-loading-spinner-overlay';

import styles from '../styles/switchcommunity';
import {connect} from 'react-redux';
import {languages} from '../locales/languages';
import {textColor} from '../constants/colors';
import {
 ImageURL
} from '../constants/config';
import {
  switch_communitiesList
} from '../redux/actions/userAuth';


const MovieList = props => {
  const client = useApolloClient();

  //  Language Update *********

  const {languageValue} = props;
  

  //**** Font Size Update  ************/
  const {fontSizeValue} = props;
  console.log('fontSizeValue:::', fontSizeValue);
  const {navigation} = props;

  const [getCommunityList, setGetCommunityList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getMovieList();
  }, []);

  const getMovieList = async () => {
    console.log('getList!!!!');
    setLoading(true);

    try {
      await props
        .switch_communitiesList(client)
        .then(async response => {
          console.log('response log', JSON.stringify(response));
          setLoading(false);
      
            if (response.results.length > 0) {
              setGetCommunityList(response.results,);
            } else {
              setGetCommunityList([]);
            }
          
        })
        .catch(err => {
          setLoading(false);
          setTimeout(() => {}, 100);
          console.log('error log', err);
        });
    } catch (e) {
      console.log('err log', e);
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
      <View style={styles.titleBar}>
      
        <View style={styles.appBarTxtView}>
          <Text
            style={
              styles.titleText(fontSizeValue)
            }>
            {languages[languageValue].Home}
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{flex: 1, paddingBottom: 30}}>
          {getCommunityList.length > 0 ? (
            <FlatList
              data={getCommunityList}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                
                  <View               
                    style={styles.contentTouchView}>
                   
                 
                      <ImageBackground
                        source={
                          item.image === null
                            ? require('../assets/images/commDet.jpg')
                            : {uri: ImageURL+ item.poster_path}
                        }
                        style={styles.imgArea2}
                        imageStyle={styles.imageStyle}>                 
                      </ImageBackground>

                      <Text style={styles.communityTxt(fontSizeValue)}>
                              {item.title}
                      </Text>
                        
                         
                   

                  </View>
                );
              }}
            />
          ) : (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: 50,
              }}>
              <Text style={styles.nodataText(fontSizeValue)}>
                No Data Found
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

     
    </SafeAreaView>
  );
};

const mapStateToProps = ({font, language}) => {
  console.log('language ' + language.currentlanguage);
  return {
    fontSizeValue: font.fontSize,
    languageValue: language.currentlanguage,
  };
};

const mapDispatchToProps = dispatch => ({
  switch_communitiesList: (client, inputs) =>
    dispatch(switch_communitiesList(client, inputs)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
