import { StyleSheet, Dimensions } from "react-native";
import { darkbackground, lightbackground } from '../constants/colors';


export default StyleSheet.create({
    outer: {
        backgroundColor:lightbackground,
        flex: 1
    },
      container_dark: {
        flex: 1,
        backgroundColor:darkbackground,
    },
    nodataText:
    fontSize => ({
        fontSize: 12 + fontSize,
        color: "#000",
        fontFamily: 'CharisSIL-Bold'
    }),
    titleBar: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 25,
        paddingRight: 25
    },
    titleText: fontSize=>({
        fontSize: 16+fontSize,
        fontFamily: "Poppins-Medium",
        color: "#20201f"
    }),
    search: {
        width: 15,
        height: 25
    },
    arrowView:{
        position:"absolute",
        left:20,
        top:20
    },
    appBarTxtView: {
        // marginRight: 80
    },
    scrollview:{
height: Dimensions.get("window").height / 1,
    },
    contentBox: {
        height: 80,
        width: "100%",
        backgroundColor: "white",
        elevation: 1,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    txtUp: {
        fontSize: 17,
        color: "#d15469",
        fontWeight: "700"
    },
    txtView: {
        flexDirection: "column",

    },
    txtDwn: {
        fontSize: 16,
        color: "#595555",
        fontWeight: "500"
    },
    bottomTouchView: {
        height: 70,
        width: "100%",
        flexDirection: "row"
    },
    createView: {
        width: "50%",
        backgroundColor: "#00a19d",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    joinView: {
        width: "50%",
        backgroundColor: "#e05d5d",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row"
    },
    imgIconView: {
        bottom: 3
    },
    touchTxt: fontSize=>({
        color: "#fff",
        textTransform: "uppercase",
        fontFamily: "Poppins-Medium",
        fontSize: 9+fontSize
    }),
    communityContainer: {
        height: 180,
        width: "42%",
        backgroundColor: "#fff",
        borderRadius: 22,
        elevation: 12,
        marginTop: 20,
        marginLeft: 15,

    },
    contentTouchView:{
        height: 200,
        width: "42%",
        borderRadius: 20,
        elevation: 1,
        borderColor: "#ebf5d5",
        borderWidth: 1,
    
        backgroundColor: "#ebf5d5",
        marginLeft: 15,
        marginTop: 25,
        left:10,
        right:10,
        overflow:"hidden",
        flexDirection: "column"
    },
    contentTouchViewSelected:{
        height: 200,
        width: "42%",
        borderRadius: 20,
        elevation: 1,
        borderColor: "#c91508",
        borderWidth: 4,
       
        backgroundColor: "#ebf5d5",
        marginLeft: 15,
        marginTop: 25,
        left:10,
        right:10,
        overflow:"hidden"
    },
    // imgArea: {
    //     height: 180,
    //     width: "42%",
    //     borderRadius: 20,
    //     elevation: 1,
    //     borderColor: "#ebf5d5",
    //     borderWidth: 1,
       
    //     backgroundColor: "#ebf5d5",
    //     marginLeft: 15,
    //     marginTop: 25,
    //     left:10,
    //     right:10,

    // },
    imgArea:{
        height: "110%",
        width: "100%",
        borderRadius: 20,
        borderWidth:3,
        borderColor:"red"   
    },
    imgArea2:{
        height: 150,
        width: "100%",
        borderRadius: 20,
        // borderWidth:2,
        // borderColor:"red"   
    },
    imageStyle: {
        height: 150,
        width: "100%",
        borderRadius: 20       
    },
    containerTwo: {
        height: 50,
        width: "90%",
        borderRadius: 12,
        backgroundColor: "#00000",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: 10,
        paddingTop: 5,
        marginLeft: 8,
        marginTop: 60,
        elevation:2,
    },
    communityTxt:fontSize=>({
        color: "#000000",
        fontFamily: "Poppins-Regular",
        fontSize: 16+fontSize,
        paddingLeft: 10,
        paddingTop: 10,
       
        marginLeft: 8,
        // textAlign:"auto"
        lineHeight: 12
    }),
    communityView: {
        marginTop: 10

    },
    addgroup: {
        height: 15,
        width: 15,
        tintColor: "#fff"
    },
    members: {
        height: 25,
        width: "90%",
        backgroundColor: "#000",
        flexDirection: "row",
        borderRadius: 100 / 2,
        marginTop: 35,
        elevation: 5,
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    membersTxt: fontSize=>({
        color: "#fff",
        fontSize: 8+fontSize,
        fontFamily: "Poppins-Regular"
    }),
    backArrowIcon:{
        height: 30.5,
        width: 38.5,
        tintColor:"#000"
    }
})