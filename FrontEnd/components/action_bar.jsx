import React, { useState } from "react"
import { View, TextInput, TouchableHighlight} from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faFilter, faPen, faTimes, faPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { Dimensions } from "react-native";
import styles from "../styles/action_bar"
const window = Dimensions.get("window");

export default function ActionBar({ editionMode, editeBtn, addProduct, addState, action }){
    const [ text, setText ] = useState("")
    return <>
        <View style = { styles.action_bar_u } >
            <View style = { styles.search_u } >
                <TouchableHighlight underlayColor={ null } onPressOut={ () => { action(text) } }>
                    <FontAwesomeIcon icon={faSearch} size = { window.height*0.04 } color="#707070" style={{ paddingTop: window.width*0.09}}/>
                </TouchableHighlight>
                <TextInput style = { styles.textInput_u } placeholder="Pesquisar" value= { text } onChangeText={ (text) => { setText(text) } }></TextInput>
            </View>

            <View style = {styles.action_button_u} >
                <FontAwesomeIcon icon={faFilter} size={window.height*0.04} color="#707070"/> 
            </View>

            <TouchableHighlight onPressOut={ () => { editeBtn() } } underlayColor={null} >
                <View style = {styles.action_button_u} >
                { editionMode ? <FontAwesomeIcon icon={faTimes}size={window.height*0.04} color="#707070"/> : <FontAwesomeIcon icon={faPen}size={window.height*0.04} color="#707070"/>}
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPressOut={ () => { addProduct(!addState) } } underlayColor={null}>
                <View style = {styles.action_button_u} >
                    <FontAwesomeIcon icon={faPlus} size={window.height*0.04} color="#707070"/>
                </View>
            </TouchableHighlight>
            <View style = {styles.action_button_u} >
                <FontAwesomeIcon icon={faCartArrowDown} size={window.height*0.04} color="#707070"/>
            </View>
        </View>
    </>
}