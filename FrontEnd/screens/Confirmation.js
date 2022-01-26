import React from "react"
import { Modal, Text, View } from "react-native"
import styles from "../styles/style"
import Submit from "../components/submit"

export default function Confirmation({ content, option, action, cancel }){
    function options(num){
        switch(num){
            case 1: 
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Confirmar" styleContainer={styles.add} action={ () => { action() } } />
                        <Submit content="Cancelar" styleContainer={ styles.remove } action = { () => { cancel() } } />
                    </View>)
            case 2:
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Excluir" styleContainer={styles.exclude} action={ () => { action() } } />
                        <Submit content="Cancelar" styleContainer={ styles.cancel1 } action={ () => { cancel() } }/>
                    </View>)
            case 3:
                return (
                    <View style = {{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 20, marginTop: 15 }} >
                        <Submit content="Salvar" styleContainer={styles.save} action={ () => {action()} } />
                        <Submit content="Cancelar" styleContainer={ styles.cancel2 } action={ () => {cancel()} }/>
                    </View>)
        }
    }

    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <Text style = { styles.formTitle } >Confirmação</Text>
                <Text style = { [styles.formSubTitle, { width: 300 }] } >{ content }</Text>
                { options(option) }
            </View>
        </View>
    </Modal>
}