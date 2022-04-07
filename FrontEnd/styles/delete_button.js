import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    delete_button: {
        width: window.width/1.5,
        height: 40,
        backgroundColor: "#00CC00",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#0D4E03",
        justifyContent: "center",
        alignContent: "center",
        marginBottom: 10,
    }, 
    delete_text: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontFamily: "NunitoSans_700Bold"
    },
})
export default mocks;