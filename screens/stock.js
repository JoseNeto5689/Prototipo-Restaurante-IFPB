import React,{useEffect, useState} from 'react'; 
import { StyleSheet, View, StatusBar, ActivityIndicator } from 'react-native';
import ProductList from '../components/product_list';
import Header from '../components/hearder';
import Footer from '../components/footer';
import ActionBar from '../components/action_bar';
import DeleteButton from '../components/delete_button';
import AddProduct from './AddProduct';
import Confirmation from './Confirmation';
const Requests = require("../controllers/request-control")


//Aplicar o moment no Product

export default function Stock() {
  let [deleteList] = useState([])
  const [ confirmation, setConfirmation ] = useState(false)
  const [editionMode, setEditionMode] = useState(false);
  const [addProduct, setAddProduct] = useState(false)
  const [dados, setDados] = useState()
  const [loading, setLoading] = useState(true)
  useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (<>
    { loading ? <ActivityIndicator/> : 
    <View style={styles.container}>

      <StatusBar/>

      <View style = { { flex: 1, alignItems: "center", justifyContent: "center" } }>

          <Header/>

          <ActionBar editionMode={editionMode} editeBtn = { () => { setEditionMode(!editionMode) } } addProduct={setAddProduct} addState={addProduct} action={ (value) => { Requests.search(value ,setDados, setLoading) } } />
          
          { editionMode ? <DeleteButton action={() => { setConfirmation(true) }}/> : null}
          
          <ProductList values = { dados } editionMode={editionMode} list={ deleteList } reload={ () => {Requests.list(setDados, setLoading)} }/>
          
          <Footer/>
          { addProduct && <AddProduct exitBtn={ setAddProduct } exitState = { addProduct } reload={ () => { Requests.list(setDados, setLoading) } }/> }
          
          { confirmation && <Confirmation content={"Tem certeza que deseja excluir esses items? "} 
          option={ 2 } 
          cancel={ () => { setConfirmation(false) } }
          action={ () => { 
            setLoading(true)
            Requests.delete(deleteList, () => { Requests.list(setDados, setLoading);setConfirmation(false);setLoading(false)  })
          }}/>
          }
      </View>

    </View>  
  }
  </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});