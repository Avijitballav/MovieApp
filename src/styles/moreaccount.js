import { StyleSheet, Dimensions } from "react-native";
import { darkbackground, lightbackground,appcolor, textColor } from '../constants/colors';

export default StyleSheet.create({
    outer: {
        backgroundColor:lightbackground,
        flex: 1
    },
      container_dark: {
        flex: 1,
        backgroundColor:darkbackground,
    },
    appBar: {
        flexDirection: "row",
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 25,

    },
    appBarImg: {
        width: 70,
        height: 70,
        borderRadius:100/2
    },
    appBarTitle: {
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 10,
    },
    appBarTitleTextUp: fontSize=>({
        fontSize: 12+fontSize,
        fontFamily: "Poppins-Bold",
        color: "#e05d5d"
    }),
    appBarTitleTextDwnDark: fontSize=>({
        fontSize: 9+fontSize,
        fontFamily: "Poppins-SemiBold",
        color: "#ffffff"
    }),
    appBarTitleTextDwn: fontSize=>({
        fontSize: 9+fontSize,
        fontFamily: "Poppins-SemiBold",
        color: "#383333"
    }),
    body: {
        paddingLeft: 25,
        paddingRight: 25,
        height: Dimensions.get("window").height/0.79
    },
    contentBox: {
        height: 70,
        width: "100%",
        backgroundColor: "white",
        elevation: 2,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        paddingLeft:10,
        paddingRight:15,
        // alignItems: "center",
       
        shadowOpacity:0.9
    },
    icons: {
        tintColor: "#d15469",
        width: 35,
        height: 35,
         position: "absolute",
        left: 0,
    },
    contentBoxView: {
        justifyContent:"center",
        alignItems: "center",
        paddingLeft: 30,
        flexDirection: "row",
        paddingRight:0,
        // right:10,
        position:"absolute",
        left:20,
        top:20

    },
    contentBoxTextView1: {
        marginRight: 15,
        marginLeft:15
    },
    contentBoxTextView2: {
        marginRight: 70,
        left:17

    },
    contentBoxTextView3: {
        marginRight: 65,
        left:15

    },
    contentBoxTextView4: {
        marginRight: 10,
        left:15

    },
    contentBoxTextView5: {
        marginRight: 110,
        left:15

    },
    contentBoxTextView6: {
        marginRight: -55,
        left:15

    },
    contentBoxText: fontSize=>({
        color: "#383333",
        fontSize: 16+fontSize,
        fontFamily:"Poppins-Medium"
    }),
    rightarrow: {
        width: 30,
        height: 30,
        tintColor: "#d15469"
    },
    arrowView: {
       // paddingLeft: 100,
        justifyContent:"center",
        alignItems: "center",
        position:"absolute",
        right:10,
        top:20,
  
    },

    spinnerTextStyle: {
        color: appcolor,
        fontFamily: "Poppins-Regular",
    },




    container: {
        flex: 1,


        backgroundColor: lightbackground,
    },
    // container_dark: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: darkbackground,
    // },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    scrollView: {
        width: "100%",
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        // height:"100%"
        // height: Dimensions.get("window").height/12

    },
    listBlock: {
        paddingTop: 10,
        paddingBottom: 10,
        width: "100%",
        height: 47,
        paddingLeft: 60,
    },
    arrowsetting: {
        width: 20,
        height: 20,
        flex: 1,
        position: "absolute",
        right: 30,
        top: 10
    },
    arrow: {
        width: 20,
        height: 20,
        flex: 1,
        position: "absolute",
        right: 5,
        top: 10
    },
    icon: {
        width: 50,
        height: 47,
        position: "absolute",
        left: 0,
    },
    textLink: {
        fontSize: 15,
        fontFamily: "Poppins-Medium",
        color: "#333",
    },
    FontsizetextLink: fontSize => ({
        fontSize: 15 + fontSize,
        fontFamily: "Poppins-Medium",
        color: "#333",
    }),
    list: {
        marginTop: 10,
        marginBottom: 10,
    }

})