import {
    StyleSheet
} from "react-native";
import {
    color
} from "react-native-reanimated";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        backgroundColor: "#fff"
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    },
    logo_area: {
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 82,
        resizeMode: 'stretch',
    },
    social_login: {
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    social_icon: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: "row",
        marginBottom: 5,
    },
    social_img: {
        marginLeft: 5,
        marginRight: 5,
        width: 38,
        height: 38,
    },
    social_login_txt: {
        fontFamily: "Poppins-Regular",
        color: "#555454",
        fontSize: 13,
        marginBottom: 20,
    },
    login_txt: {
        fontSize: 18,
        fontFamily: "Poppins-Medium",
        width: "100%",
        textTransform: "uppercase",
        color: "#555454",
        marginBottom: 30,
    },
    tabsContainer: {
        width: "80%"
    },
    tabStyle: {
        borderRadius: 0,
        borderColor: "transparent",
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderBottomWidth: 5,
        borderBottomColor: "#fff",
    },
    tabtxtStyle: {
        color: "#333",
        fontFamily: "Poppins-SemiBold",
        fontSize: 18,
    },
    activeStyle: {
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderBottomWidth: 5,
        borderBottomColor: "#086c2e",
    },
    activetextStyle: {
        color: "#333"
    },
    tabContent: {
        marginTop: 150,
        marginBottom: 20,
        width: "80%",
        minHeight: 200,
    },
    inputTxt: {
        width: "100%",
        height: 45,
        // lineHeight: 40,
        textAlign: "left",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#d2d2d2",
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 7,
        fontFamily: "Poppins-Regular",
        color: "#666666",
    },
    inputBlock: {
        marginBottom: 15,
    },
    textLink: {
        color: "#086c2e",
        fontFamily: "Poppins-SemiBold",
        textAlign: "center"
    },
    loginBtWrap: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        backgroundColor: "#e6252b",
        width: 150,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 24,

    },
    loginButtonTxt: {
        color: "#fff",
        fontSize: 15,
        fontFamily: "Poppins-SemiBold",
        textAlign: "center",
    },
    checkboxText: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    checkbox: {
        width: 20, 
        height: 20, 
        marginRight: 10
    },
    chklabel: {
        color: "#086c2e",
        fontFamily: "Poppins-SemiBold",
    },
    conditionArea: {
        flexDirection: "row",
    },
    privacy: {
        width: "50%",
    },
    terms: {
        width: "50%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    linkText: {
        color: "#086c2e",
        fontFamily: "Poppins-SemiBold",
        fontSize:13,
    },
    skipArea: {
        width: "90%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 50,
    },
    skipbtn: {
        borderWidth: 1,
        borderColor: "#086c2e",
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 0,
    },
    skipText: {
        color: "#086c2e",
        fontFamily: "Poppins-SemiBold",
        fontSize: 11,
    },
    scrollView: {
        width: "100%",
    },
    loginWrap: {
        justifyContent: "center",
        alignItems: "center",
    },
    spinnerTextStyle: {
        color: '#FFF',
        fontFamily: "Poppins-Regular",
    },

});