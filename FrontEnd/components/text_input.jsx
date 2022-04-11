import React, { useState } from "react";
import { View, TextInput } from "react-native"
import styles from "../styles/text_input"

export default function InputText({ placeholder, defaultValue, setState }){
    const [ text, setText ] = useState(defaultValue)
    return <View style = { styles.container } >
        <TextInput style = {styles.text} placeholder={ placeholder } value={ text } onChangeText={ (text) => { setText(text); setState(text) } }  />
    </View>
}