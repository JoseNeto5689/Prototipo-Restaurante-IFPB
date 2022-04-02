import React from "react";
import { FlatList, View, Text } from "react-native";
import Product from "./product";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"

export default function ProductList({values, editionMode, list, reload, reset}){
    if (values.length == 0){
        return <>
            <View style = { styles.out_stock } >
                <FontAwesomeIcon icon={ faExclamation } color = { '#707070' } size = {70}/>
                <Text style = { styles.out_stock_text } >Nenhum item nesse estoque</Text>
            </View>
        </>
    }
    return <FlatList 
            data={values}
            renderItem={ ({ item }) => <View style = {{ marginBottom: 20 }} ><Product values={item} editionMode = { editionMode } list={ list } reload={ reload } reset={ reset } /></View> }
            keyExtractor={({id}, index) => id}/>
}