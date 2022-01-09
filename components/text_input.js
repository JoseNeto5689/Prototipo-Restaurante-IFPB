import React from "react";
import { View, TextInput, StyleSheet } from "react-native"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';

export default function InputText({ width, placeholder }){
    const styles = StyleSheet.create({
        container: {
            height: 32,
            width: width,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#707070",
            justifyContent: "center",
            alignContent: "center"
        },
        text: {
            paddingHorizontal: 10,
            fontFamily: "NunitoSans_400Regular",
            color: "#707070"
        }
    })

    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold, NunitoSans_900Black
      });
    
    if (!fontsLoaded) 
    {
    return <AppLoading />;
    } 
    else 
    {
    return <View style = { styles.container } >
        <TextInput style = {styles.text} placeholder={ placeholder }/>
    </View>
    }
}