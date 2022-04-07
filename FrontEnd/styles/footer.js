import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    footer: {
        width: window.width,
        height: 90,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: "5%",
        bottom: 0
    },
    footer_line:{
        width: window.width * 0.3,
        height: 4,
        backgroundColor: "#707070",
        borderRadius: 5,
        justifyContent: "center",
        alignContent: "center"
        
    },
    footerText: {
        fontFamily: "NunitoSans_400Regular", 
        fontSize: 20, 
        color: "#707070"
    },
})
export default mocks;