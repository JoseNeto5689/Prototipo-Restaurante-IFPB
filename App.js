import React,{useEffect, useState} from 'react'; 
import { StyleSheet, View, StatusBar } from 'react-native';
import Product from './components/product';

export default function App() {
  return <>
    <StatusBar/>
    <View style = { styles.container } >
      <Product/>
    </View>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});