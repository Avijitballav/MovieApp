import { View, Text, StyleSheet, Image, ImageBackground, SafeAreaView, TouchableOpacity, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react';
import styles from "../styles/language";
import { RadioButton, Checkbox } from 'react-native-paper';
import { languages } from '../locales/languages';
import { connect } from 'react-redux';
import { languageChanges } from '../redux/actions/languageActions';
import AsyncStorage from '@react-native-community/async-storage';

// export default function LanguageScreen({ navigation }) {

const LanguageScreen = (props) => {


    //  Language Update *********

    const { languageValue } = props;

    const [checked, setChecked] = React.useState(languageValue);

    useEffect(() => {
        languageChange()
    }, [checked]);

    const languageChange = async () => {
        await AsyncStorage.setItem('language',checked)
        await props.languageChanges(checked);
    }

    console.log("Current Lan:::", languages[languageValue].Home);



    //**** Font Size Update  ************/ 
    const { fontSizeValue } = props;
    console.log("fontSizeValue:::", fontSizeValue);

    const { navigation } = props;

    const [userOption, setUserOption] = useState(false);
    



   

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imgBackgrnd} source={require("../assets/images/ic_bg_category_listing.png")} >
            
              
                <View style={styles.subHeading}>
                    <Text style={styles.subHeadingTxt(fontSizeValue)}>
                        {languages[languageValue].descriptionoflanguage}
                    </Text>
                </View>
               {/* <ScrollView> */}
                    <View style={styles.radioGroupView}>
                        <RadioButton.Group
                            onValueChange={value => {
                                setChecked(value)
                            }
                            }
                            value={checked}
                        >
                            <View style={languageValue === "English" ? styles.lanCont : styles.lanCont}>
                                <View style={styles.txtView}>
                                    <Text style={languageValue === "English" ? styles.FontsizetextLink(fontSizeValue) : styles.FontsizetextLink2(fontSizeValue)}>English</Text>
                                </View>
                                <View style={styles.radioView}>
                                    <RadioButton.Android
                                        onValueChange={() => setUserOption(checked.value)}
                                        color='#ffff'
                                        value="English" />
                                </View>
                            </View>
                           
                            <View style={languageValue === "Hindi" ? styles.lanCont2 : styles.lanCont2 }>
                                <View style={styles.txtView}>
                                    <Text style={languageValue === "Hindi"? styles.FontsizetextLink(fontSizeValue) : styles.FontsizetextLink2(fontSizeValue)}>Hindi</Text>
                                </View>
                                <View style={styles.radioView}>
                                    <RadioButton.Android
                                        onValueChange={() => setUserOption(checked.value)}
                                        color='#ffff'
                                        value="Hindi" />
                                </View>
                            </View>
                        </RadioButton.Group>

                    
                    </View>
                    {/* </ScrollView> */}

            </ImageBackground>
        </SafeAreaView>
    )
}



const mapStateToProps = ({ font, language }) => {
    console.log('language ' + language.currentlanguage);
    return ({    
        fontSizeValue: font.fontSize,
        languageValue: language.currentlanguage
    })
};

const mapDispatchToProps = dispatch => ({
    languageChanges: (inputs) => dispatch(languageChanges(inputs)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LanguageScreen);