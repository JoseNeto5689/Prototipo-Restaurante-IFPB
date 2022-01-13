import React from "react"
import { Modal, Text, View } from "react-native"
import styles from "../styles/style"
import Submit from "../components/submit"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';

export default function Confirmation({ content, option, action2, cancel }){
    function options(num){
        switch(num){
            case 1: 
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Confirmar" styleContainer={styles.add} />
                        <Submit content="Cancelar" styleContainer={ styles.remove } />
                    </View>)
            case 2:
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Excluir" styleContainer={styles.exclude} action={ () => { action2() } } />
                        <Submit content="Cancelar" styleContainer={ styles.cancel1 } action={ () => { cancel() } }/>
                    </View>)
            case 3:
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Salvar" styleContainer={styles.save} />
                        <Submit content="Cancelar" styleContainer={ styles.cancel2 } />
                    </View>)
        }
    }

    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_900Black
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
                <Text style = { [styles.formTitle, { fontFamily: "NunitoSans_900Black" }] } >Confirmação</Text>
                <Text style = { [styles.formSubTitle, { fontFamily: "NunitoSans_400Regular", width: 300 }] } >{ content }</Text>
                { options(option) }
            </View>
        </View>
    </Modal>
    }
}