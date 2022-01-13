import React from "react";
import { FlatList, Text, View } from "react-native";
import Product from "./product";

export default function ProductList({values, editionMode, list}){
    return <FlatList 
            data={values}
            renderItem={ ({ item }) => <View style = {{ marginBottom: 40 }} ><Product values={item} editionMode = { editionMode } list={ list } /></View> }
            keyExtractor={({id}, index) => id}/>
}