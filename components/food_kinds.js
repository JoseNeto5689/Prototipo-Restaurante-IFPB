import React, {useState} from 'react'; 
import { View, StyleSheet } from 'react-native';
import { Picker as Pick} from "@react-native-picker/picker"

export default function FoodKinds({ defaultValue }){
    const [foodKind, setFoodKind] = useState(defaultValue);
  return (
    <View style = { styles.container } >
        <Pick
        style = {{ width: 210 }}
        selectedValue={foodKind}
        onValueChange={(itemValue, itemIndex) => { 
          if(itemValue != 0){
          setFoodKind(itemValue)
         }}}>
          <Pick.Item label="Selecione um tipo" value="0" style = {{ color: "black" }} />
          <Pick.Item style = { styles.item } label='Carboidratos' value = {1}/>
          <Pick.Item style = { styles.item } label='Hortaliças' value = {2}/>
          <Pick.Item style = { styles.item } label='Frutas' value = {3}/>
          <Pick.Item style = { styles.item } label='Leguminosas' value = {4}/>
          <Pick.Item style = { styles.item } label='Carnes e ovos' value = {5}/>
          <Pick.Item style = { styles.item } label='Leite e derivados' value = {6}/>
          <Pick.Item style = { styles.item } label='Óleos e gorduras' value = {7}/>
          <Pick.Item style = { styles.item } label='Açúcares' value = {8}/>
        </Pick>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderColor: "#707070",
      borderWidth: 2,
      height: 32,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15
    },
    item: {
        color: "#707070",
        fontWeight: "bold"
    }
  })