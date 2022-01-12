import React from "react";
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

export default function AddProduct({ exitBtn, exitState }){
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
                <View style = { styles.exit } ><Exit action={ exitBtn } exitState={ exitState } /></View>
                <Text style = { [styles.formTitle, { fontFamily: "NunitoSans_900Black" }] } >Adicionar</Text>
                <Text style = { [styles.formSubTitle, { fontFamily: "NunitoSans_400Regular" }] } >Preencha os campos abaixo para adicionar um novo produto.</Text>
                <View style = {styles.formContainer} >
                    <View style = { [styles.row, { marginTop: 15 }] } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 20 }} >Nome:</Text><TextInput width={240}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 20 }} >Descrição:</Text><TextInput width={200}/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 25 }}>Gênero: </Text><FoodKinds/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 40 }}>Quantidade:</Text><NumberInput/>
                    </View>
                    <View style = { styles.row } >
                        <Text style = {{ fontFamily: "NunitoSans_900Black", color: "#707070", fontSize: 18, marginRight: 20 }}>Validade:</Text><DataInput/>
                    </View>
                </View>
                <View style = {{ marginBottom: 30 }} >
                    <Submit content="Adicionar" action={() => {}}/>
                </View>
            </View>
        </View>
    </Modal>
    }
}