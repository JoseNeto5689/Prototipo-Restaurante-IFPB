import React, {useState} from 'react'; 
import { View, StyleSheet } from 'react-native';
import DataInput from './components/date_input';
//Aplicar o moment no Product

export default function App() {  
  return (
    <View style = { styles.container } >
        <DataInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})

