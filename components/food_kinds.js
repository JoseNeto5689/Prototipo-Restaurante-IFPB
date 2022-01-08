import React, {useState} from 'react'; 
import { View, StyleSheet } from 'react-native';
import { Picker as Pick} from "@react-native-picker/picker"

export default function FoodKinds(){
    const [foodKind, setFoodKind] = useState();
  return (
    <View style = { styles.container } >
        <Pick
        style = {{ width: 200 }}
        selectedValue={foodKind}
        onValueChange={(itemValue, itemIndex) => { setFoodKind(itemValue) }}>
          <Pick.Item style = { styles.item } label='Carboidratos' value = "Carboidratos"/>
          <Pick.Item style = { styles.item } label='Hortaliças' value = "Hortaliças"/>
          <Pick.Item style = { styles.item } label='Frutas' value = "Frutas"/>
          <Pick.Item style = { styles.item } label='Leguminosas' value = "Leguminosas"/>
          <Pick.Item style = { styles.item } label='Carnes e ovos' value = "Carnes e ovos"/>
          <Pick.Item style = { styles.item } label='Leite e derivados' value = "Leite e derivados"/>
          <Pick.Item style = { styles.item } label='Óleos e gorduras' value = "Óleos e gorduras"/>
          <Pick.Item style = { styles.item }label='Açúcares ' value = "Açúcares "/>
        </Pick>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      borderColor: "#707070",
      borderWidth: 2,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15
    },
    item: {
        color: "#707070"
    }
  })