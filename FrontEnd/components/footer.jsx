import React from "react";
import { View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt, faCubes, faChartLine   } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"
  
export default function PageFooter(){
    return (
        <>
        <View style = { styles.footer_line } />
        <View style = {styles.footer} >
            <View style = {{ alignItems: "center" }} >
                <FontAwesomeIcon icon = {faCalendarAlt} size={45} color="gray"/>
                <Text style = { styles.footerText } >Refeições</Text>
            </View>
            <View style = {{ alignItems: "center" }}>
                <FontAwesomeIcon icon = {faCubes} size={45} color="gray"/>
                <Text style = { styles.footerText } >Estoque</Text>
            </View>
            <View style = {{ alignItems: "center" }}>
                <FontAwesomeIcon icon = {faChartLine} size={45} color="gray"/>
                <Text style = { styles.footerText } >Presença</Text>
            </View>
        </View>
        </>
    )
}