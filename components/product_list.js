import React from "react";
import { FlatList, Text, View } from "react-native";
import Product from "./product";

export default function ProductList({values, editionMode, list, reload}){
    return <FlatList 
            data={values}
            renderItem={ ({ item }) => <View style = {{ marginBottom: 40 }} ><Product values={item} editionMode = { editionMode } list={ list } reload={ reload }/></View> }
            keyExtractor={({id}, index) => id}/>
}