import { StyleSheet } from "react-native";

const mocks = StyleSheet.create({
    header: {
        width: 410,
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "#707070",
        borderBottomWidth: 3,
        paddingHorizontal: "4%"
    },
    footer: {
        width: 410,
        height: "12%",
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