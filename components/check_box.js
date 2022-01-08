import React, {useState} from "react";
import { View, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

export default function CheckBox({ id }){
    const [check, setCheck] = useState(false)
    function action(){
        if(check === true){
            setCheck(false)
            return
        }
        if(check === false){
            setCheck(true)
            return
        }
    }
    return <TouchableHighlight onPressOut={ () => { action() } } underlayColor={null} >
        <View style = { styles.check_box } >
            { check ? <FontAwesomeIcon icon={faCheck} size={20} color="green" /> : null }
        </View>
    </TouchableHighlight>
}

