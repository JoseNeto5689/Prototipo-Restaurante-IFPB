import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import AddProduct from './screens/AddProduct';
import Stock from "./screens/Stock"
import Confirmation from './screens/Confirmation';

export default function App() {  
  return (
    <View style = { styles.container } >
      <Stock/>
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

