import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import FoodKinds from './components/food_kinds';


export default function App() {  
  return (
    <View style = { styles.container } >
        <FoodKinds/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center"
  }
})

