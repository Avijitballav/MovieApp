import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Keyboard, Platform } from 'react-native';
import { connect } from 'react-redux';
import { darkbackground, lightbackground } from '../constants/colors';
import { languages } from '../locales/languages';
import I18n from '../i18n';

const MyTabBar = (props) => {
  const { state, descriptors, navigation } = props;
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const [keyboardShown, setKeyboardShown] = useState(false);

  //  Language Update *********
  const { languageValue } = props;
  console.log("languageValue:::", languageValue);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardShown);
    Keyboard.addListener("keyboardDidHide", handleKeyboardHidden);
    return () => {
      Keyboard.removeListener("keyboardDidShow", handleKeyboardShown);
      Keyboard.removeListener("keyboardDidHide", handleKeyboardHidden);
    };
  }, [])

  const handleKeyboardShown = () => setKeyboardShown(true);
  const handleKeyboardHidden = () => setKeyboardShown(false);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  if (keyboardShown) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            key={index}
            onLongPress={onLongPress}
            style={styles.container}
          >
            {/* { flex: 11, justifyContent: 'center', alignItems: 'center', flexDirection: "row", } */}
            <View style={isFocused ? styles.styleactive : styles.styledeactive}>
              {

                (label == 'Home' && isFocused) ? (
                  <Image style={styles.home} source={require('../assets/images/ic_home_select.png')} />
                )

                  :
                  (label == 'Home' && !isFocused) ?
                    (
                      <Image style={styles.home1} source={require('../assets/images/ic_home_select.png')} />
                    )
                    : null
              }
             
              {
                (label == 'More' && isFocused) ? (
                  <Image style={styles.myaccount} source={require('../assets/images/ic_more_select_community.png')} />
                )
                  :
                  (label == 'More' && !isFocused) ?
                    (
                      <Image style={styles.myaccount2} source={require('../assets/images/ic_more_select_community.png')} />
                    )
                    : null
              }


              <Text style={{ color: isFocused ? '#ffffff' : 'transparent', fontSize: 10, fontFamily: "Poppins-Medium", flexWrap: "nowrap"}}>
                {label=='Home'?languages[languageValue].Home:languages[languageValue].More}
              </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }
            }>

              {
                index == 3 ?
                  null
                  :
                  <View style={{ height: 30, backgroundColor: "#ffffff", alignSelf: 'center', elevation: 4, }
                  } />
              }
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const mapStateToProps = ({ dark, font, language }) => {
  console.log('mapStateToProps ' + JSON.stringify(dark));
  console.log('mapStateToProps font ' + JSON.stringify(font));
  return ({
  
    languageValue: language.currentlanguage
  })
};


export default connect(mapStateToProps)(MyTabBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: Platform.OS == 'ios' ? 15 : 5,
    backgroundColor: lightbackground,
    borderTopWidth: 1,
    borderTopColor: "#cacccc",

  },
  container_dark: {

    flex: 1,
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: Platform.OS == 'ios' ? 15 : 5,
    backgroundColor: darkbackground,
    borderTopWidth: 1,
    borderTopColor: "#cacccc",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5
  },
  tabIcon: {
    width: 20,
    height: 20,
    overflow: "visible"
  },
  notification: {
    width: 16,
    height: 20,
    overflow: "visible"
  },
  myaccount: {
    width: 20,
    height: 19,
    overflow: "visible"
  },
  myaccount2: {
    width: 20,
    height: 19,
    overflow: "visible",
    tintColor:"#e05d5d"

  },
  communitycart: {
    width: 20,
    height: 19,
    overflow: "visible"
  },
  communitycart2: {
    width: 21,
    height: 19,
    overflow: "visible",
    tintColor:"#e05d5d"
  },
  home: {
    width: 22,
    height: 22,
    overflow: "visible",
  },
  home1: {
    width: 22,
    height: 22,
    overflow: "visible",
    tintColor:"#e05d5d"
  },
  // homeactive: {
  //   height: 45,
  //   width: 135,
  //   position: "absolute",
  //   left: 30

  // },
  styleactive: {
    height: 33,
    // width: "85%",
    backgroundColor: "#00a19d",
    borderRadius: 28,
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 20,

    right: 10,
    // position:"absolute"
    // width:"100%"
    flex:105,
    top:0

  },
  styledeactive: {
    height:30,
    top:12,
  
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:20,
    paddingRight:20,
    width: "100%",
    // flex:16,
  
  },
  count: {
    backgroundColor: "#ff9e1a",
    minWidth: Platform.OS == 'ios' ? 18 : 15,
    height: 15,
    color: "#fff",
    borderRadius: 5,
    fontSize: 8,
    position: "absolute",
    top: 0,
    right: Platform.OS == 'ios' ? 18 : 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 2,
    paddingLeft: 3,
    paddingRight: 3,
    overflow: "hidden"

  }
});