import React, {useState} from "react";
import { View, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

export default function CheckBox({ id, list }){
    const [check, setCheck] = useState(false)
    function action(){
        if(check === true){
            setCheck(false)
            let index = list.indexOf(id)
            if (index !== -1) {
                list.splice(index, 1);
            }
            return
        }
        if(check === false){
            setCheck(true)
            list.push(id)
            return
        }
    }
    return <TouchableHighlight onPressOut={ () => { action() } } underlayColor={null} >
        <View style = { styles.check_box } >
            { check ? <FontAwesomeIcon icon={faCheck} size={20} color="green" /> : null }
        </View>
    </TouchableHighlight>
}

