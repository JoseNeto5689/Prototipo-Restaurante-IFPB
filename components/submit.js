import React from "react"
import { TouchableHighlight, Text } from "react-native"
import styles from "../styles/style"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

export default function Submit({ action, content = "Submit", styleContainer, styleText }){
    let [fontsLoaded] = useFonts({
        NunitoSans_700Bold
      });
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
    return <TouchableHighlight underlayColor={false} onPressOut={ () => { action() } } style = { [styles.submit_container, styleContainer] }>
        <Text style = { [styles.submit, styleText] } >{ content }</Text>
    </TouchableHighlight>
    }
}