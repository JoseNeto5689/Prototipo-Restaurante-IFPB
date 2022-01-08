import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';

const moment = require("moment")

export default function Product({values}){
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
        return <View style = {{ width: 380, height: 155}}>
        <View style = { styles.tag_name_container } >
            <Text style = { styles.tag_name } >Nome do Produto</Text>
        </View>
        <View style = { styles.product_name_container } >
                <Text style={styles.product_name} >{values.product_name}</Text>
        </View>
        <View style = {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
            <View style = {{ width: "30%", borderBottomRightRadius: 5 }} >
                <View style = { styles.sides_container }>
                    <Text style = { styles.top_text } >Quantidade</Text>
                </View>
                <View style = { [styles.sides, { borderBottomLeftRadius: 5  }] } >
                    <Text style = { styles.down_text } >{values.amount}</Text>
                </View>
            </View>
            <View  style = {{ width: "40%" }} >
                <View style = { styles.center_container } >
                    <Text style = { styles.top_text } >Gênero Alimenticio</Text>
                </View>
                <View style = { styles.center } >
                    <Text style = { styles.down_text } >{values.food_kinds}</Text>
                </View>
            </View>
            <View style = {{ width: "30%"}} >
                <View style = { styles.sides_container }>
                    <Text style = { styles.top_text } >Validade</Text>
                </View>
                <View style = { [styles.sides, { borderBottomRightRadius: 5  }] } >
                    <Text style = { styles.down_text } >{moment(values.expiration_date).format("DD/MM/YYYY")}</Text>
                </View>
            </View>
        </View>
        </View>
    }
}

const styles = StyleSheet.create({
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
        borderColor: "#093902"
    },
    tag_name:{
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
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
        color: "#707070"
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
