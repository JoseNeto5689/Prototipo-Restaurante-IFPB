import React, { useState } from "react";
import { View, Modal, Text, Alert } from "react-native";
import styles from "../styles/style"
import NumberInput from "../components/number_input";
import FoodKinds from "../components/food_kinds";
import TextInput from "../components/text_input"
import DataInput from "../components/date_input";
import Submit from "../components/submit";
import Exit from "../components/exit";
import Confirmation from "./Confirmation";
const Requests = require("../controllers/request-control")
const moment = require("moment")
import { Dimensions } from "react-native";
const window = Dimensions.get("window");

export default function AddProduct({ exitBtn, exitState, reload }){
    let body
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [foodKind, setFoodKind] = useState(0)
    const [amount, setAmount] = useState(0)
    const [expirationDate, setExpirationDate] = useState(new Date())
    const [confirmation, setConfirmation] = useState(false)
    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <View style = { styles.exit } ><Exit action={ exitBtn } exitState={ exitState } /></View>
                <Text style = { styles.formTitle } >Adicionar</Text>
                <Text style = { styles.formSubTitle } >Preencha os campos abaixo para adicionar um novo produto.</Text>
                <View style = {styles.formBox} >
                    <View style = { [styles.row, { marginTop: window.height * 0.02 }] } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.02 }} >Nome:</Text><TextInput setState={ setProductName }/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.03 }} >Descrição:</Text><TextInput setState = { setProductDescription } />
                    </View>
                    <View style = { styles.row}>
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05 }}>Gênero: </Text><FoodKinds setState={ setFoodKind } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.06 }}>Quantidade:</Text><NumberInput setState={ setAmount } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.02 }}>Validade:</Text><DataInput setState={ setExpirationDate } date={ expirationDate } />
                    </View>
                </View>
                <View style = {{ marginBottom: 30 }} >
                    <Submit content="Adicionar" action={() => { 
                        body = ({
                            product_name: productName,
                            product_description: productDescription,
                            food_kind: foodKind,
                            amount: amount,
                            expiration_date: moment(expirationDate).format("YYYY-MM-DD")
                        })
                        if(Requests.checkBody(body) == "")
                        {
                            setConfirmation(true)                        
                        }
                        else
                        {
                            Alert.alert("Erro", Requests.checkBody(body))
                        }
                        } }/>
                </View>
            </View>
        </View>
        { confirmation ? <Confirmation content={"Tem certeza que deseja adicionar esse novo item? "} actionText = { "Confirmar" } cancel={ () => { setConfirmation(false) } } action = { () => {
            Requests.verify(body, () => { reload(); setConfirmation(false); exitBtn(false) })
         } }/> : null } 
    </Modal>
    }