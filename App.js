import React,{useEffect, useState} from 'react'; 
import Stock from './screens/stock';
import ActionBar from './components/action_bar';
import { View, StyleSheet } from 'react-native';

//Aplicar o moment no Product

export default function App() {  
  return (
    <View style = { styles.container } ><Stock/></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

