import React, { useState } from "react";
import { View, Modal, Text, Alert } from "react-native";
import styles from "../styles/AlterAddConfirm"
import NumberInput from "../components/number_input";
import FoodKinds from "../components/food_kinds";
import TextInput from "../components/text_input"
import DataInput from "../components/date_input";
import Submit from "../components/submit";
import Exit from "../components/exit";
import Confirmation from "./Confirmation";
const moment = require("moment")
const Requests = require("../controllers/request-control")
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

export default function AlterProduct({setState, values, reload}){

    const [body,setBody] = useState({})
    let [sub, setSub ] = useState(0)
    let [sum, setSum ] = useState(0)
    const [productName, setProductName] = useState(values.product_name)
    const [productDescription, setProductDescription] = useState(values.product_description)
    const [foodKind, setFoodKind] = useState(values.food_kind_id)
    const [expirationDate, setExpirationDate] = useState(moment(values.expiration_date).toDate())
    const [confirmation, setConfirmation] = useState(false)
    const [quantity, setQuantity] = useState(values.amount)
    const [quantityChanger, setQuantityChanger] = useState(0)

    function quantityModify(quantityChanger){
        switch (quantityChanger){
            case 0:
                return <>
                    <View style = { styles.amount_options } >
                        <Submit content="Adicionar" styleContainer={[styles.add]}  action={ () => { setQuantityChanger(1); setSum(0) } } />
                        <Submit content="Retirar" styleContainer={ styles.remove } action={ () => { setQuantityChanger(2); setSub(0) } }/>
                    </View>
                </>
            case 1: 
                return <>
                    <View style = {{ marginBottom: 10 }} >
                       <NumberInput setState={setSum} /> 
                    </View>
                    <View style = { styles.amount_options } >
                        <Submit content="Adicionar" styleContainer={[styles.add, { paddingHorizontal: 10 }]} action={ () => {setQuantity(quantity + sum)} } />
                        <Submit content="Parar" styleContainer={ [styles.remove, { paddingHorizontal: 23 }] } action={ () => { setQuantityChanger(0) } } />
                    </View>
                </>
            case 2: 
                return <>
                    <View style = {{ marginBottom: 10 }} >
                       <NumberInput setState={setSub} /> 
                    </View>
                    <View style = { styles.amount_options } >
                        <Submit content="Retirar" styleContainer={ [styles.add, { paddingHorizontal: 19 }] } action={ () => { if( quantity - sub < 0 ){ setQuantity(0); return } setQuantity(quantity - sub) } }/>
                        <Submit content="Parar" styleContainer={ [styles.remove, { paddingHorizontal: 23 }] } action={ () => { setQuantityChanger(0) } } />
                    </View>
                </>
        }
    }    
    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <View style = { styles.exit } ><Exit action={ () => { setState(false) } } /></View>
                <Text style = { [styles.formTitle, { fontFamily: "NunitoSans_900Black" }] } >Alterar</Text>
                <Text style = { [styles.formSubTitle, { fontFamily: "NunitoSans_400Regular", width: 300 }] } >Edite os campos a seguir para alterar as informações do produto. </Text>
                <View style = {styles.formBox} >
                    <View style = { [styles.row, { marginTop: 15 }] } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: window.width * 0.05  }} >Nome:</Text><TextInput setState={ setProductName } defaultValue={ productName } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: window.width * 0.02 }} >Descrição:</Text><TextInput setState={ setProductDescription } defaultValue={ productDescription } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18,  }}>Gênero: </Text><FoodKinds setState={ setFoodKind } defaultValue={foodKind} />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, }}>Validade:</Text><DataInput setState={setExpirationDate} date={ expirationDate } />
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
                    <Submit content="Salvar" action={() => { 
                        setBody({
                            product_name: productName,
                            product_description: productDescription,
                            food_kind: foodKind,
                            amount: quantity,
                            expiration_date: moment(expirationDate).format("YYYY-MM-DD")
                        })
                        if(Requests.checkBody(body) === "")
                        {
                            setConfirmation(true)                        
                        }
                        else
                        {
                            setConfirmation(false)
                            Alert.alert("Erro", Requests.checkBody(body))
                        }
                        } }/>
                </View>
            </View>
        </View>
        { confirmation ? <Confirmation content={"Tem certeza que deseja adicionar esse novo item? "} actionText = { "Alterar" } cancel={ () => { setConfirmation(false) } } action={ () => {
            Requests.verify(body, () => { 
                setConfirmation(false)
                setState(false)
                reload()
             }, 
             values.id)
        } } /> : null }
    </Modal>
    }