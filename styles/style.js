import { StyleSheet } from "react-native";

const mocks = StyleSheet.create({
    header: {
        width: 410,
        height: 75,
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
        height: 90,
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
    },
    delete_button: {
        width: 250,
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
    },
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
        margin: 20
    },
    formTitle: {
        color: "#707070",
        fontSize: 30,
        marginTop: 20
    },
    formSubTitle: {
        color: "#707070",
        fontSize: 15,
        textAlign: "center",
        width: 250,
        marginHorizontal: 40
    },
    row: {
        flexDirection: "row",
        paddingHorizontal: 15,
        marginBottom: 15
    },
    submit_container:{
        backgroundColor: "#00CC00",
        borderColor: "#0D4E03",
        borderWidth: 2,
        borderRadius: 5
    },
    submit: {
        color: "white",
        paddingVertical: 5,
        paddingHorizontal: 25
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
    exclude: {
        backgroundColor: "red",
        paddingHorizontal: 10,
        marginRight: 35
    }, 
    cancel1: {

    },
    save: {
        paddingHorizontal: 15,
        marginRight: 35
    },
    cancel2: {
        backgroundColor: "red",
        paddingHorizontal: 10
    },
    tag_name_container: {
        width: "100%",
        height: "30%",
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderWidth: 2,
        borderBottomWidth: 1,
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
        height: "30%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#093902",
        borderTopWidth: 1
    },
    product_name: {
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 10
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