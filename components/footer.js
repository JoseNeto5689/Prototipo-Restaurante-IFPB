import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faCubes, faChartLine   } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';

  
export default function PageFooter(){
    //<FontAwesomeIcon icon = {faBars} size="60px" color="gray"/>
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular,
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return <View style = {styles.footer} >
        <View style = {{ alignItems: "center" }} >
            <FontAwesomeIcon icon = {faCalendarAlt} size={45} color="gray"/>
            <Text style = {{ fontFamily: "NunitoSans_400Regular", fontSize: 20, color: "#707070" }} >Refeições</Text>
        </View>
        <View style = {{ alignItems: "center" }}>
            <FontAwesomeIcon icon = {faCubes} size={45} color="gray"/>
            <Text style = {{ fontFamily: "NunitoSans_400Regular", fontSize: 20, color: "#707070" }} >Estoque</Text>
        </View>
        <View style = {{ alignItems: "center" }}>
            <FontAwesomeIcon icon = {faChartLine} size={45} color="gray"/>
            <Text style = {{ fontFamily: "NunitoSans_400Regular", fontSize: 20, color: "#707070" }} >Presença</Text>
        </View>
    </View>
}
}