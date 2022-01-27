import React, {useState} from "react";
import { View, TouchableHighlight } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

export default function CheckBox({ id, list, reset }){ //Alternativa ao fato do react native não possuir um componente de check box -_-
    const [check, setCheck] = useState(false) //Estado da check box: selecionado ou não selecionado
    function action(){
        if(check === true){ //Caso a caixa estela selecionada
            setCheck(false) //Desmarque
            reset() //Atualize a página //Reset necessário devido o mecanismo do botão de editar da classe produto
            let index = list.indexOf(id) //Encontrar id do produto que possui essa checkbox na lista de items para excluir
            if (index !== -1) {
                list.splice(index, 1); //Remover esse id
            }
            return
        }
        if(check === false){ //Caso a caixa não esteja selecionada
            setCheck(true) //Marque ela
            reset() //Atualize a página //Reset necessário devido o mecanismo do botão de editar da classe produto
            list.push(id) //Adicionar id a lista de items para exluir
            return
        }
    }
    return (
        <TouchableHighlight onPressOut={ () => { action() } } underlayColor={null} >
            <View style = { styles.check_box } >
                { check ? <FontAwesomeIcon icon={faCheck} size={20} color="green" /> : null }
            </View>
        </TouchableHighlight>
    )
}

