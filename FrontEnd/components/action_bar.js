import React, { useState } from "react"
import { View, TextInput, TouchableHighlight } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faFilter, faPen, faTimes, faPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

export default function ActionBar({ editionMode, editeBtn, addProduct, addState, action }){
    const [ text, setText ] = useState("") //State responsável pelo texto da barra de pesquisa
    return (
    <View style = {styles.action_bar} >
        
        <View style = { styles.search }>

            <TouchableHighlight underlayColor={ null } onPressOut={ () => { action(text) } }>
                <FontAwesomeIcon icon={faSearch} size={30} color="#707070" style={{ marginLeft: 10, marginRight: 5 }}/>
            </TouchableHighlight>

            <View style = {{ width: 130 }} >
                <TextInput style = { styles.textInput } value= { text } onChangeText={ (text) => { setText(text) } }  placeholder="Pesquisar"></TextInput>
            </View>

        </View>

        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faFilter} size={30} color="#707070"/> 
        </View>

        <TouchableHighlight onPressOut={ () => { editeBtn() } } underlayColor={null} >
            <View style = {styles.action_button} >
                { editionMode ? <FontAwesomeIcon icon={faTimes}size={30} color="#707070"/> : <FontAwesomeIcon icon={faPen}size={30} color="#707070"/> }
            </View>
        </TouchableHighlight >

        <TouchableHighlight onPressOut={ () => { addProduct(!addState) } } underlayColor={null}>
            <View style = {styles.action_button} >
                <FontAwesomeIcon icon={faPlus} size={30} color="#707070"/>
            </View>
        </TouchableHighlight>

        <View style = {styles.action_button} >
            <FontAwesomeIcon icon={faCartArrowDown} size={30} color="#707070"/>
        </View>

    </View>
    );
}