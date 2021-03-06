import React from "react"
import { Text, TouchableHighlight } from "react-native"
import styles from "../styles/delete_button"

export default function DeleteButton({action}){
    return ( 
        <TouchableHighlight style = { styles.delete_button } onPressOut={() => {action()}}>
                <Text style = { styles.delete_text } >Deletar selecionados</Text>
        </TouchableHighlight>
    )
    }