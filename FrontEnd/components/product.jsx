import React, { useState } from "react";
import { Text, View, ScrollView, TouchableHighlight } from "react-native";
import CheckBox from "./check_box";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"
import ExpandedProduct from "../screens/ExpandedProduct"
import AlterProduct from "../screens/AlterProduct";

const moment = require("moment")

export default function Product({values, editionMode, list, reload, reset}){
    const [ expandendProduct, setExpandedProduct ] = useState(false)
    const [editproduct, setEditProduct] = useState(false)
    return <>
        <TouchableHighlight onPress={ () => { setExpandedProduct(true) } } underlayColor={null} >
            <View style = { styles.product }>
            <View style = { [styles.tag_name_container, editionMode ? null : { justifyContent: "center", alignContent: "center" }] }>
            {editionMode 
            ? 
                <CheckBox id={values.id} list={ list } reset={ reset } /> 
            : 
            null}
                <Text style = { [styles.tag_name ] } >Nome do Produto</Text>
            {editionMode && list.length === 0 
            ? 
                <TouchableHighlight onPressOut={ () => {setEditProduct(true)} } underlayColor={ null }>
                    <FontAwesomeIcon icon={faPen} size={25} color="white" />
                </TouchableHighlight> : <View style = {{ width: 25, height: 25 }} />
            }
            </View>
            <View style = { styles.product_name_container } >
                <ScrollView horizontal = { true } >
                    <Text style={styles.product_name} >{ values.product_name }</Text>
                </ScrollView>
            </View>
            <View style = {{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }} >
                <View style = {{ width: "30%", borderBottomRightRadius: 5 }} >
                    <View style = { styles.sides_container }>
                        <Text style = { styles.top_text } >Quantidade</Text>
                    </View>
                    <View style = { [styles.sides, { borderBottomLeftRadius: 5  }] } >
                        <Text style = { styles.down_text } >{values.amount}</Text>
                    </View>
                </View>
                <View  style = {{ width: "40%" }} >
                    <View style = { styles.center_container }>
                        <Text style = { styles.top_text } >Gênero Alimenticio</Text>
                    </View>
                    <View style = { styles.center } >
                        <Text style = { styles.down_text } >{values.food_kind}</Text>
                    </View>
                </View>
                <View style = {{ width: "30%"}} >
                    <View style = { styles.sides_container }>
                        <Text style = { styles.top_text } >Validade</Text>
                    </View>
                    <View style = { [styles.sides, { borderBottomRightRadius: 5  }] } >
                        <Text style = { styles.down_text } >{moment(values.expiration_date).format("DD/MM/YYYY")}</Text>
                    </View>
                </View>
            </View>
            </View>
        </TouchableHighlight>
        { expandendProduct && <ExpandedProduct values={values} expandedState={ setExpandedProduct } /> }
        { editproduct && <AlterProduct setState={ setEditProduct } values={ values } reload={ reload } /> }
    </>
}