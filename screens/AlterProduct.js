import React, { useState } from "react";
import { View, Modal, Text } from "react-native";
import styles from "../styles/style"
import NumberInput from "../components/number_input";
import FoodKinds from "../components/food_kinds";
import TextInput from "../components/text_input"
import DataInput from "../components/date_input";
import Submit from "../components/submit";
import Exit from "../components/exit";
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';

export default function AlterProduct(){
    let [sub, setSub ] = useState(0)
    let [sum, setSum ] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [quantityChanger, setQuantityChanger] = useState(0)

    function quantityModify(quantityChanger){
        switch (quantityChanger){
            case 0:
                return <>
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20 }} >
                        <Submit content="Adicionar" styleContainer={[styles.add]}  action={ () => { setQuantityChanger(1); setSum(0) } } />
                        <Submit content="Retirar" styleContainer={ styles.remove } action={ () => { setQuantityChanger(2); setSub(0) } }/>
                    </View>
                </>
            case 1: 
                return <>
                    <View style = {{ marginBottom: 10 }} >
                       <NumberInput setState={setSum} /> 
                    </View>
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20 }} >
                        <Submit content="Adicionar" styleContainer={[styles.add, { paddingHorizontal: 10 }]} action={ () => {setQuantity(quantity + sum)} } />
                        <Submit content="Parar" styleContainer={ [styles.remove, { paddingHorizontal: 23 }] } action={ () => { setQuantityChanger(0) } } />
                    </View>
                </>
            case 2: 
                return <>
                    <View style = {{ marginBottom: 10 }} >
                       <NumberInput setState={setSub} /> 
                    </View>
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20 }} >
                        <Submit content="Retirar" styleContainer={ [styles.add, { paddingHorizontal: 19 }] } action={ () => { if( quantity - sub < 0 ){ setQuantity(0); return } setQuantity(quantity - sub) } }/>
                        <Submit content="Parar" styleContainer={ [styles.remove, { paddingHorizontal: 23 }] } action={ () => { setQuantityChanger(0) } } />
                    </View>
                </>
        }
    }    
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold, NunitoSans_900Black
      });
    
    if (!fontsLoaded) 
    {
    return <AppLoading />;
    } 
    else 
    {
    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <View style = { styles.exit } ><Exit action={ () => {  } } /></View>
                <Text style = { [styles.formTitle, { fontFamily: "NunitoSans_900Black" }] } >Alterar</Text>
                <Text style = { [styles.formSubTitle, { fontFamily: "NunitoSans_400Regular", width: 300 }] } >Edite os campos a seguir para alterar as informações do produto. </Text>
                <View style = {styles.formContainer} >
                    <View style = { [styles.row, { marginTop: 15 }] } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 20 }} >Nome:</Text><TextInput width={240}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 22 }} >Descrição:</Text><TextInput width={200}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 37 }}>Gênero: </Text><FoodKinds/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 24 }}>Validade:</Text><DataInput/>
                    </View>
                </View>
                <View style = { [styles.formContainer, { marginTop: 0 }] } >
                     <Text style = { [styles.actual_quantity, { fontFamily: "NunitoSans_700Bold" }] } >Quantidade atual</Text>
                     <View style = { styles.quantity_container } >
                         <Text style = { styles.quantity } >{quantity}</Text>
                     </View>
                     { quantityModify(quantityChanger) }
                </View>
                <View style = {{ marginBottom: 30 }} >
                    <Submit content="Salvar" action={() => {}}/>
                </View>
            </View>
        </View>
    </Modal>
    }
}