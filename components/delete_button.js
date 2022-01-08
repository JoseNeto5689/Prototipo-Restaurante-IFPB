import React from "react"
import { Text, TouchableHighlight, View } from "react-native"
import styles from "../styles/style"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';

export default function DeleteButton({action}){
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return <TouchableHighlight style = { styles.delete_button } onPressOut={() => {action()}}>
            <Text style = { [styles.delete_text, { fontFamily: "NunitoSans_700Bold" }] } >Deletar selecionados</Text>
    </TouchableHighlight>
    }
}