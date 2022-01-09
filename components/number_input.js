import React from "react";
import NumericInput from "react-native-numeric-input"

export default function NumberInput(){
    return <NumericInput 
        value={0} 
        onChange={ () => {} } 
        rounded minValue={0}
        type="plus-minus"
        iconStyle={{ fontSize: 14, color: 'black' }}
        inputStyle={{ fontSize: 16, color: 'black'}}
        totalHeight={32}
        totalWidth={160}
        />
}