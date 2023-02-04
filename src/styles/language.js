import { StyleSheet, Dimensions } from "react-native";
import { darkbackground, lightbackground } from '../constants/colors';


export default StyleSheet.create({
    outer: {
        backgroundColor: lightbackground,
        flex: 1
    },
    container_dark: {
        flex: 1,
        backgroundColor: darkbackground,
    },
    imgBackgrnd: {
        height: Dimensions.get("window").height /1,
        backgroundColor:"#fff8e5",
        flexDirection:"column"
// borderTopLeftRadius:50        
    
    },
    appBar: {

        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        height: Dimensions.get("window").height / 16,
        width: Dimensions.get("window").width / 1,
        // paddingTop: 20,
        // flexDirection: "row",
        // paddingHorizontal: 30,
        // justifyContent: "center",
        // alignItems: "center",

    },
    whiteArrow: {
        width: 30.5,
        height: 38.5
    },
    appBarTextView: {
        alignItems: "center",
        justifyContent: "center",
        bottom: 31
    },
    larrowView: {
        right: 140,
    },
    FontsizetextLink: fontSize => ({
        fontSize: 12 + fontSize,
        fontFamily: "Poppins-Medium",
        color: "#fff",
        // justifyContent:"center",
    
        
    }),
    FontsizetextLink2: fontSize => ({
        fontSize: 12 + fontSize,
        fontFamily: "Poppins-Medium",
        color: "#333",
        // justifyContent:"center"
    }),
    headingView: {
        paddingRight: 60,
    },
    headerText: fontSize => ({
        color: "#00a19d",
        fontSize: 16 + fontSize,
        fontFamily: "CharisSIL-Bold",
        textAlign: "justify",
        lineHeight: 20
    }),
    appText: fontSize => ({
        color: "#fff",
        fontSize: 16 + fontSize,
        fontFamily: "Poppins-Medium"
    }),
    // body: {
    //     height: Dimensions.get("window").height / 10

    // },
    subHeading: {
        //paddingTop:230,
        paddingLeft: 25,
        paddingRight: 25,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // flex:6,
        height: Dimensions.get("window").height / 3,
        marginTop:55

    },
    subHeadingTxt: fontSize => ({
        color: "#00a19d",
        fontSize: 14 + fontSize,
        fontFamily: "CharisSIL-Bold",
        textAlign: "justify",
        lineHeight: 22,

    }),
    lanCont: {
        //top:20,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#00a19d",
        //marginTop:10,


    },
    lanCont2: {
        //top:10,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",
                alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#00a19d",
        marginTop: 10,


    },
    lanCont3: {
        //top:10,
        //bottom:10,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#00a19d",
        marginTop:20
    },
    lanContDeselect3: {
        top: 10,
        bottom: 10,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#fff",
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#888888"
    },
    lanContDeselect2: {
        top: 10,
        bottom: 10,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#fff",
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#888888"
    },
    lanContDeselect: {
        // top:10,
        // bottom:10,
        flexDirection: "row",
        paddingTop: 30,
        justifyContent: "center",        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25,
        height: 50,
        width: "100%",
        borderRadius: 100 / 2,
        backgroundColor: "#fff",
        //marginTop:20,
        borderWidth: 1,
        borderColor: "#888888"
    },
    radioView: {

        justifyContent: "center",
        alignItems: "center",
        bottom: 7,
        position: "absolute",
        right: 20
    },
    txtView: {
        justifyContent: "center",
        alignItems: "center",
        
        position: "absolute",
       // left: 140,
        //right:60,
       // bottom:15


    },
    pressTouchable: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#e05d5d",
        borderRadius: 100 / 2

    },
    pressText: fontSize => ({
        textTransform: "uppercase",
        color: "#ffffff",
        fontFamily: "Poppins-Medium",
        fontSize: 12 + fontSize
    }),
    touchView: {
        // paddingTop: 20,
        backgroundColor:"#fff8e5",
        top:25
    },
    radioGroupView: {
        paddingLeft: 35,
        paddingRight: 35,
        justifyContent: "flex-start",
        // alignItems:"center",
        //alignItems:"center",
        backgroundColor:"#fff8e5",
        // height: Dimensions.get("window").height / 110,
        bottom: 50,
        flex:0.2,
            


    },




    option: fontSize => ({
        fontSize: 20 + fontSize,
        color: 'white',
        textAlign: 'center',
    }),
    unselected: {
        backgroundColor: 'red',
        margin: 5,
    },
    selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
})