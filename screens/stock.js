import React,{useEffect, useState} from 'react'; 
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import ProductList from '../components/product_list';
import Header from '../components/hearder';
import Footer from '../components/footer';
import ActionBar from '../components/action_bar';
import DeleteButton from '../components/delete_button';
import AddProduct from './AddProduct';
const Requests = require("../controllers/request-control")

//Aplicar o moment no Product

export default function Stock() {
  let editionMode = false;
  let addProduct = false
  const [dados, setDados] = useState()
  const [loading, setLoading] = useState(true)
  useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (
    <View style={styles.container}>
      <StatusBar/>
      {
        loading ? <ActivityIndicator/> : <View style = { { flex: 1, alignItems: "center", justifyContent: "center" } }>
            <Header/>
            <ActionBar/>
            { editionMode ? <DeleteButton action={() => {}}/> : null}
            <ProductList values = { dados } editionMode={editionMode}/>
            <Footer/>
            { addProduct && <AddProduct/> }
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