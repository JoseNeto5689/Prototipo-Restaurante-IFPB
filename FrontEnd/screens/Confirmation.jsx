import React from "react"
import { Modal, Text, View } from "react-native"
import styles from "../styles/AlterAddConfirm"
import Submit from "../components/submit"

export default function Confirmation({ content, option, action, cancel, actionText }){
    return <Modal animationType="fade" transparent = { true } >
        <View style = { styles.modalView } >
            <View style={ styles.formContainer } >
                <Text style = { styles.formTitle } >Confirmação</Text>
                <Text style = { [styles.formSubTitle, { paddingHorizontal: 20, marginHorizontal: 40 }] } >{ content }</Text>
                <View style = {styles.confirmation_options} >
                    <Submit content={actionText} styleText = { styles.optionText } styleContainer={styles.confirm } action={ () => { action() } } />
                    <Submit content="Cancelar" styleText = { styles.optionText } styleContainer={ styles.cancel } action = { () => { cancel() } } />
                </View>
            </View>
        </View>
    </Modal>
}