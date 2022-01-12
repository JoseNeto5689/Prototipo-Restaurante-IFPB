import React,{useEffect, useState} from 'react'; 
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import ProductList from '../components/product_list';
import Header from '../components/hearder';
import Footer from '../components/footer';
import ActionBar from '../components/action_bar';
import DeleteButton from '../components/delete_button';
import AddProduct from './AddProduct';
import AlterProduct from './AlterProduct';
import ExpandedProduct from './ExpandedProduct';
const Requests = require("../controllers/request-control")


//Aplicar o moment no Product

export default function Stock() {
  const [editionMode, setEditionMode] = useState(false);
  const [addProduct, setAddProduct] = useState(false)
  let alterProduct = true
  const [dados, setDados] = useState()
  const [loading, setLoading] = useState(true)
  useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (
    <View style={styles.container}>
      <StatusBar/>
      {
        loading ? <ActivityIndicator/> : <View style = { { flex: 1, alignItems: "center", justifyContent: "center" } }>
            <Header/>
            <ActionBar editionMode={editionMode} editeBtn = { () => { setEditionMode(!editionMode) } } addProduct={setAddProduct} addState={addProduct} />
            { editionMode ? <DeleteButton action={() => {}}/> : null}
            <ProductList values = { dados } editionMode={editionMode}/>
            <Footer/>
            { addProduct && <AddProduct exitBtn={ setAddProduct } exitState={ addProduct }/> }
            { alterProduct && <AlterProduct/> }
            
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