import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import NumberInput from './components/number_input';

export default function App() {  
  return (
    <View style = { styles.container } >
        <NumberInput/>
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

