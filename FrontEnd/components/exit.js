import React from "react";
import { TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Exit({ action, exitState }){
    return <TouchableHighlight underlayColor={false} onPressOut={() => {action(!exitState)}} >
        <FontAwesomeIcon icon={faTimes} color="red" size={40} />
    </TouchableHighlight>
}