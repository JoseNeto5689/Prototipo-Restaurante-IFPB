import React, {useState} from 'react'; 
import { View } from 'react-native';
import { Picker as Pick} from "@react-native-picker/picker"
import { Dimensions } from "react-native";
import styles from "../styles/food_kinds"
const window = Dimensions.get("window");

export default function FoodKinds({ defaultValue, setState }){
    const [foodKind, setFoodKind] = useState(defaultValue);
  return (
    <View style = { styles.container } >
        <Pick
        style = {{ width: window.width * 0.55 }}
        selectedValue={foodKind}
        onValueChange={(itemValue, itemIndex) => { 
          if(itemValue != 0){
          setFoodKind(itemValue)
          setState(itemValue)
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
