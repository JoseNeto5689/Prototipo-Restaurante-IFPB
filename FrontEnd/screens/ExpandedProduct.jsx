import React from "react";
import { Text, View, Modal, ScrollView } from "react-native";
import Submit from "../components/submit";
import { Dimensions } from "react-native";
import styles from "../styles/ExpandedProduct"
const window = Dimensions.get("window")
const moment = require("moment")


export default function ExpandedProduct({values, expandedState}){
    return (
        <Modal animationType="fade" transparent = { true } >
            <View style = { styles.modalView } >
                <View>
                    <View style = { styles.tag_name_container } >
                        <Text style = { styles.tag_name } >Nome do produto</Text>
                    </View>
                    <View style = { styles.product_name_container } >
                        <ScrollView horizontal = { true } >
                            <Text style = { styles.product_name } >{ values.product_name }</Text>
                        </ScrollView>
                    </View>
                    <View style = { styles.tag_description_container } >
                        <Text style = { styles.tag_description } >Descrição do produto</Text>
                    </View>
                    <View style = { styles.product_description_container } >
                        <ScrollView>
                            <Text style = { styles.product_description } >{ values.product_description }</Text>
                        </ScrollView>
                    </View>
                    <View style = { styles.tag_description_container } >
                        <Text style = { styles.tag_name }>Gênero Alimenticio</Text>
                    </View>
                    <View style = { styles.product_name_container } >
                        <Text style = { styles.product_name } >{ values.food_kind }</Text>
                    </View>
                    <View style ={ { flexDirection: "row", flexGrow: 1, marginHorizontal: "5%", height: 80, justifyContent: 'center' } } >
                        <View>
                            <View style = {[styles.tag_quantity_container, {borderRightWidth: 2, borderColor: "#093902", borderLeftWidth: 2}] } >
                                <Text style = { styles.tag_quantity } >Quantidade</Text>
                            </View>
                            <View style = { [styles.product_quantity_container, {borderBottomLeftRadius: 15,borderRightWidth: 2, borderColor: "#093902", borderLeftWidth: 2}]} >
                                <Text style = { [styles.product_quantity] } >{values.amount}</Text>
                            </View>
                        </View>
                        <View>
                            <View style = { [styles.tag_quantity_container, {borderRightWidth: 2, borderColor: "#093902"}] } >
                                <Text  style = { styles.tag_quantity } >Validade</Text>
                            </View>
                            <View style = { [styles.product_quantity_container, { borderBottomRightRadius: 15,borderRightWidth: 2, borderColor: "#093902" }] }  >
                                <Text style = { [styles.product_quantity] } >{moment(values.expiration_date).format("DD/MM/YYYY")}</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{ marginTop: 30, width: "100%", alignItems: "center" }} ><Submit content="Voltar" styleContainer={{ width: window.width * 0.3 }} styleText={ {textAlign: "center", fontSize: 18} } action={ () => { expandedState(false) } }/></View>
                </View>
            </View>
        </Modal>
        
    );
}
