import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    action_bar_u: {
        height: window.width * 0.18,
        width: window.width,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        paddingTop: 10
    },
    search_u: {
        flexDirection: "row",
        marginLeft: 5,
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        flexGrow: 0,
        paddingVertical: 5,
        alignContent: "center",
        paddingHorizontal: 10,
        height: window.width*0.12,
        marginRight: 4
    },
    textInput_u: {
        paddingLeft: 5,
        fontFamily :"NunitoSans_400Regular", 
        fontSize: 20, 
        color: "#707070" 
    },
    action_button_u: {
        width: window.width*0.12,
        height:  window.width*0.12,
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4,
    },
})

export default mocks;