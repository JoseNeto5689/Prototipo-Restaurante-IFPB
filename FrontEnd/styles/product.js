import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

const mocks = StyleSheet.create({
    product: {
        width: window.width*0.95,
    },

    tag_name_container: {
        width: "100%",
        height: 45,
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 2,
        borderBottomWidth: 3,
        borderColor: "#093902",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    tag_name:{
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_name_container: {
        width: "100%",
        height: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#093902",
        borderTopWidth: 0
    },
    product_name: {
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 10,
        marginVertical: 0,

    },
    sides_container: {
        backgroundColor: "#0D4E03",
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: "#093902"
    },
    sides: {
        backgroundColor: "white",
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#093902",
        borderTopWidth: 2
    },
    center_container:{
        backgroundColor: "#0D4E03",
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        
    },
    center:{
        backgroundColor: "white",
        paddingVertical: 8,
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 2,
        borderTopWidth: 2
    },
    top_text: {
        fontFamily: "NunitoSans_700Bold",
        color: "white"
    },
    down_text: {
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        fontSize: 15
    },
})
export default mocks;