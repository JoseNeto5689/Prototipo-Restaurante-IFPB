import React from "react";
import { Text, View, ScrollView } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';
import CheckBox from "./check_box";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

const moment = require("moment")

export default function Product({values, editionMode}){
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
        return <View style = {{ width: 380, height: 155}}>
        <View style = { [styles.tag_name_container, editionMode ? null : { justifyContent: "center", alignContent: "center" }] } >
            {editionMode ? <CheckBox id={values.id}/> : null}
            <Text style = { [styles.tag_name ] } >Nome do Produto</Text>
            {editionMode ? <FontAwesomeIcon icon={faPen} size={25} color="white" /> : null}
        </View>
        <View style = { styles.product_name_container } >
                <ScrollView horizontal = { true } >
                    <Text style={styles.product_name} >{ values.product_name }</Text>
                </ScrollView>
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
                <View style = { styles.center_container }>
                    <Text style = { styles.top_text } >Gênero Alimenticio</Text>
                </View>
                <View style = { styles.center } >
                    <Text style = { styles.down_text } >{values.food_kind}</Text>
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