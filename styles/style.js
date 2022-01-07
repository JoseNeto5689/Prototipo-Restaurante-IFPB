import { StyleSheet } from "react-native";

const mocks = StyleSheet.create({
    header: {
        width: "100%",
        height: "10%",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#707070",
        borderBottomWidth: 3,
        paddingHorizontal: "4%"
    },
    footer: {
        width: "100%",
        height: "12%",
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#707070",
        borderTopWidth: 3,
        paddingHorizontal: "5%",
        bottom: 0
    }
})

export default mocks;