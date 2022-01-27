import React from "react"
import { TouchableHighlight, Text } from "react-native"
import styles from "../styles/style"

export default function Submit({ action, content = "Submit", styleContainer, styleText }){
    return <TouchableHighlight underlayColor={false} onPressOut={ () => { action() } } style = { [styles.submit_container, styleContainer] }>
        <Text style = { [styles.submit, styleText] } >{ content }</Text>
    </TouchableHighlight>
    }