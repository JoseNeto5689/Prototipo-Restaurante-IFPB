import React from "react";
import { View, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars, faBell } from "@fortawesome/free-solid-svg-icons"
import ifpb from "../assets/icones/ifpb.png"
import styles from "../styles/style"

export default function Header(){
    //<FontAwesomeIcon icon = {faBars} size="60px" color="gray"/>
    return <View style = {styles.header} >
        <FontAwesomeIcon icon = {faBars} size={45} color="gray"/>
        <Image source={ifpb} resizeMode="cover" style = {{ width: 50, height: 50 }}/>
        <FontAwesomeIcon icon = {faBell} size={45} color="gray"/>
    </View>
}