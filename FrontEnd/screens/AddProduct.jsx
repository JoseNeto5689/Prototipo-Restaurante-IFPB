import React, { useState } from "react";
import { View, Modal, Text } from "react-native";
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
    const [productName, setProductName] = useState("")
    const [productDescription, setProductDescription] = useState("")
    const [foodKind, setFoodKind] = useState(0)
    const [amount, setAmount] = useState(0)
    const [expirationDate, setExpirationDate] = useState(new Date())
    let [confirmation, setConfirmation] = useState(false)
    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <View style = { styles.exit } ><Exit action={ exitBtn } exitState={ exitState } /></View>
                <Text style = { styles.formTitle } >Adicionar</Text>
                <Text style = { styles.formSubTitle } >Preencha os campos abaixo para adicionar um novo produto.</Text>
                <View style = {styles.formContainer} >
                    <View style = { [styles.row, { marginTop: window.height * 0.02 }] } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.009 }} >Nome:</Text><TextInput setState={ setProductName } width={240}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.03 }} >Descrição:</Text><TextInput setState = { setProductDescription }  width={200}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.03 }}>Gênero: </Text><FoodKinds setState={ setFoodKind } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.06 }}>Quantidade:</Text><NumberInput setState={ setAmount } />
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: window.width * 0.05, marginRight: window.width* 0.02 }}>Validade:</Text><DataInput setState={ setExpirationDate } date={ expirationDate } />
                    </View>
                </View>
                <View style = {{ marginBottom: 30 }} >
                    <Submit content="Adicionar" action={() => { setConfirmation(true) } }/>
                </View>
            </View>
        </View>
        { confirmation ? <Confirmation content={"Tem certeza que deseja adicionar esse novo item? "} option={ 3 } cancel={ () => { setConfirmation(false) } } action = { () => {
            const body = {
                product_name: productName,
                product_description: productDescription,
                food_kind: foodKind,
                amount: amount,
                expiration_date: moment(expirationDate).format("YYYY-MM-DD")
            }
            Requests.add(body, () => { reload(); setConfirmation(false); exitBtn(false) })
         } }/> : null } 
    </Modal>
    }