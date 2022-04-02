import React from "react"
import { Text, TouchableHighlight, View } from "react-native"
import styles from "../styles/style"

export default function DeleteButton({action}){
    return ( 
        <TouchableHighlight style = { styles.delete_button } onPressOut={() => {action()}}>
                <Text style = { styles.delete_text } >Deletar selecionados</Text>
        </TouchableHighlight>
    )
    }