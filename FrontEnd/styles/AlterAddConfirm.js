import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    formContainer: {
        borderWidth: 3,
        borderColor: "#676767",
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 7,
        marginBottom: 8
    },
    formBox: {
        borderWidth: 3,
        borderColor: "#676767",
        borderRadius: 10,
        backgroundColor: "white",
        alignItems: "flex-start",
        justifyContent: "center",
        marginHorizontal: window.width * 0.02,
        marginTop: 7,
        marginBottom: 15
    },

    formTitle: {
        color: "#707070",
        fontSize: 30,
        marginTop: 20,
        fontFamily: "NunitoSans_900Black"
    },
    formSubTitle: {
        color: "#707070",
        fontSize: 15,
        textAlign: "center",
        width: 250,
        marginHorizontal: 0,
        fontFamily: "NunitoSans_400Regular" 
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginBottom: 15,
        width: window.width * 0.9,
        justifyContent: "space-between"
    },
    exit: {
        position: "absolute",
        top: 10,
        right: 15
    },
    add: {
        marginRight: 30
    },
    remove: {
        paddingHorizontal: 12,
        backgroundColor: "red"
    },
    amount_options: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginBottom: 20
    },
    actual_quantity: {
        fontSize: 20,
        color: "#707070",
        marginTop: 10,
    },
    quantity: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    quantity_container: {
        borderRadius: 20,
        borderColor: "#676767",
        borderWidth: 2,
        backgroundColor: "#B5B5B5",
        paddingHorizontal: 15,
        marginBottom: 9,
        marginTop: 5
    },
    optionText: {
        fontSize: 13  
    },
    confirmation_options: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        paddingHorizontal: 10, 
        marginBottom: 20, 
        marginTop: 15
    },
    confirm: {
        backgroundColor: "#00CC00",
        width: window.width * 0.3,
        height: window.height * 0.04,
        marginRight: 30
    },
    cancel: {
        backgroundColor: "red",
        width: window.width * 0.3,
        height: window.height * 0.04
    },
})
export default mocks;