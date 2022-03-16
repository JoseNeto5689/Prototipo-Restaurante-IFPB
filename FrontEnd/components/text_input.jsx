import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native"

export default function InputText({ placeholder, defaultValue, setState }){
    const [ text, setText ] = useState(defaultValue)
    const styles = StyleSheet.create({
        container: {
            height: 32,
            flexGrow: 1,
            borderRadius: 15,
            borderWidth: 2,
            borderColor: "#707070",
            justifyContent: "center",
            alignContent: "center"
        },
        text: {
            paddingHorizontal: 10,
            fontFamily: "NunitoSans_600SemiBold",
            color: "#707070"
        }
    })
    return <View style = { styles.container } >
        <TextInput style = {styles.text} placeholder={ placeholder } value={ text } onChangeText={ (text) => { setText(text); setState(text) } } />
    </View>
}