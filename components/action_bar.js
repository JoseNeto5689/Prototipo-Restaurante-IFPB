import React from "react"
import { View, Text, TextInput } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faFilter, faPen, faBan, faPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';

export default function ActionBar({ editionMode = false }){
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    return <View style = {styles.action_bar} >
        <View style = { styles.search }>
            <FontAwesomeIcon icon={faSearch} size={30} color="#707070" style={{ paddingLeft: 10 }}/>
            <View style = {{ paddingLeft: 5, width: 135 }} >
                <TextInput style = {{ fontFamily :"NunitoSans_600SemiBold", fontSize: 26, color: "#707070" }} placeholder="Pesquisar"></TextInput>
            </View>
        </View>
        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faFilter} size={30} color="#707070"/>
        </View>
        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faPen}size={30} color="#707070"/>
        </View>
        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faPlus} size={30} color="#707070"/>
        </View>
        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faCartArrowDown} size={30} color="#707070"/>
        </View>
    </View>
    }
}