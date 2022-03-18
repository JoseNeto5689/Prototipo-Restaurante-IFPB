import React from "react";
import { FlatList, View } from "react-native";
import Product from "./product";

export default function ProductList({values, editionMode, list, reload, reset}){
    return <FlatList 
            data={values}
            renderItem={ ({ item }) => <View style = {{ marginBottom: 20 }} ><Product values={item} editionMode = { editionMode } list={ list } reload={ reload } reset={ reset } /></View> }
            keyExtractor={({id}, index) => id}/>
}