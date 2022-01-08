import React,{useEffect, useState} from 'react'; 
import { StyleSheet, Text, View, StatusBar, ActivityIndicator, ScrollView } from 'react-native';
import ProductList from '../components/product_list';
import Header from '../components/hearder';
import Footer from '../components/footer';
const Requests = require("../controllers/request-control")

//Aplicar o moment no Product

export default function Stock() {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (
    <View style={styles.container}>
      <StatusBar/>
      {
        loading ? <ActivityIndicator/> : <View style = { { flex: 1, alignItems: "center", justifyContent: "center" } }>
            <Header/>
            <ProductList values = { dados } />
            <Footer/>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});