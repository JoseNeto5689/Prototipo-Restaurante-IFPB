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
    },
    action_button: {
        width: 45,
        height: 45,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 4
    },
    search: {
        width: 180,
        height: 45,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginHorizontal: 4
    },
    searchIcon: {
        position: "relative",
        left: 10,
    },
    action_bar: {
        width: 400,
        flexDirection: "row",
        marginVertical: 10
    },
    check_box: {
        width: 25,
        height: 25,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#707070",
        borderRadius: 5,
    }
}) 

export default mocks;