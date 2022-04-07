import React,{useEffect, useState} from 'react'; 
import { View, StatusBar, ActivityIndicator, SafeAreaView, Alert } from 'react-native';
import ProductList from '../components/product_list';
import Header from '../components/hearder';
import Footer from '../components/footer';
import ActionBar from '../components/action_bar';
import DeleteButton from '../components/delete_button';
import AddProduct from './AddProduct';
import Confirmation from './Confirmation';
import styles from "../styles/Stock"
const Requests = require("../controllers/request-control")


//Aplicar o moment no Product

export default function Stock() {
  let [deleteList, setList] = useState([])
  const [reset, setReset] = useState(0)
  const [confirmation, setConfirmation ] = useState(false)
  const [editionMode, setEditionMode] = useState(false);
  const [addProduct, setAddProduct] = useState(false)
  const [dados, setDados] = useState()
  const [loading, setLoading] = useState(true)
  useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (<>
    { loading ? <ActivityIndicator/> : 
    <SafeAreaView style={styles.container}>

      <StatusBar/>

      <View style = { { flex: 1, alignItems: "center", justifyContent: "space-between" } }>

          <View style = {{ alignItems: "center" }} >
            <Header/>
            <ActionBar editionMode={editionMode}
              editeBtn = { () => { setEditionMode(!editionMode) } }
              addProduct={setAddProduct}
              addState={addProduct}
              action={ (value) => { Requests.search(value ,setDados, setLoading,dados); }}
            />
            
            { editionMode
            ?
            <DeleteButton action={() => {
              if(deleteList.length === 0){
                Alert.alert("Aviso", "Nenhum item selecionado para remoção")
              }
              else {
                setConfirmation(true)
              }
             }}/>
            :
            null}
            
          </View>
          <ProductList 
            values = { dados } 
            editionMode={editionMode} 
            list={ deleteList } 
            reload={ () => {Requests.list(setDados, setLoading)}} 
            reset = { () => {setReset(reset+1)/* Gambiarra de reloading */} } 
          />
          
          <Footer/>
          
          { addProduct && <AddProduct exitBtn={ setAddProduct } exitState = { addProduct } reload={ () => { Requests.list(setDados, setLoading) } }/> }
          
          { confirmation && 
            <Confirmation content={"Tem certeza que deseja excluir esses items? "} 
              actionText = { "Deletar" }
              cancel={ () => { setConfirmation(false) } }
              action={ () => { 
                setLoading(true) //Iniciando Loading para realizar requisição a API. 
                Requests.delete(deleteList, () => { //Apagando Dados
                  //Processo de Reload da página
                  setList([]);//Limpando lista de itens deletados.
                  Requests.list(setDados, setLoading); //Recarregando página. 
                  setConfirmation(false); //Desabilitando tela de confirmação
                  setLoading(false);  
                })
              }}
          />
          }
      </View>

    </SafeAreaView>  
  }
  </>
    
  );
}

