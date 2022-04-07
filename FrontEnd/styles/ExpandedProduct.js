import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignContent: "center",
        justifyContent: "center",
    },
    tag_name_container: {
        borderWidth: 2,
        borderColor: "#093902",
        marginHorizontal: "5%",
        backgroundColor: "#0D4E03",
        height: 45,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    tag_name: {
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_name_container: {
        borderWidth: 2,
        borderColor: "#093902",
        marginHorizontal: "5%",
        backgroundColor: "#fff",
        height: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    product_name: {
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 15,
    },
    tag_description_container: {
        borderWidth: 2,
        borderColor: "#093902",
        marginHorizontal: "5%",
        backgroundColor: "#0D4E03",
        height: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    tag_description: {
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_description: {
        fontSize: 26,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 10,
        textAlign: "center",
    },
    product_description_container: {
        borderWidth: 2,
        borderColor: "#093902",
        marginHorizontal: "5%",
        backgroundColor: "#fff",
        height: 90,
        alignItems: "center",
        justifyContent: "center"
    },
    tag_quantity_container: {
        height: 45,
        width: (window.width-(window.width*0.1))/2 ,
        justifyContent: 'center',
        alignContent: "center",
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center"
    },
    tag_quantity: {
        textAlign: 'center',
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center",

    },
    product_quantity_container: {
        height: 45,
        width: (window.width-(window.width*0.1))/2,
        justifyContent: 'center',
        alignContent: "center",
        backgroundColor: "#fff",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#093902",
        alignItems: "center",
        justifyContent: "center"
    },
    product_quantity: {
        textAlign: 'center',
        color: "#707070",
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        textAlign: "center",
    }
})
export default mocks;