import React from "react";
import { Text, View, Modal, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';
import Exit from "../components/exit";
import Submit from "../components/submit";
const moment = require("moment")

export default function ExpandedProduct({values}){
    let [fontsLoaded] = useFonts({
        NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
      });
    
    if (!fontsLoaded) {
    return <AppLoading />;
    } else {
        return (
            <Modal animationType="fade" transparent = { true } >
                <View style = { styles.modalView } >
                    <View style = { { borderWidth: 2, borderColor: "#093902", borderRadius: 6 } } >
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
                            <Text style = { styles.product_name } >Laticinios</Text>
                        </View>
                        <View style = { { width: 380, flexDirection: "row" } }>
                            <View>
                                <View style = { [styles.tag_quantity_container, { borderRightWidth: 1 }] } >
                                    <Text style = { styles.tag_quantity } >Quantidade</Text>
                                </View>
                                <View style = { [styles.product_quantity_container, { borderBottomLeftRadius: 5, borderRightWidth: 1  }] } >
                                    <Text style = { styles.product_quantity } >{values.amount}</Text>
                                </View>
                            </View>
                            <View>
                                <View style = { [styles.tag_quantity_container, { borderLeftWidth: 1 }] } >
                                    <Text  style = { styles.tag_quantity }  >Validade</Text>
                                </View>
                                <View style = { [styles.product_quantity_container, { borderBottomRightRadius: 5, borderLeftWidth: 1 }] }  >
                                    <Text style = { styles.product_quantity } >{moment(values.expiration_date).format("DD/MM/YYYY")}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style = {{ marginTop: 30 }} ><Submit content="Voltar" styleContainer={styles.come_back} styleText={ styles.come_back_text } action={ () => {} }/></View>
                </View>
            </Modal>
            
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center",
    },
    tag_name_container: {
        width: 380,
        height: 45,
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center",
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomWidth: 1,
        borderColor: "#093902",
    },
    tag_name:{
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_name_container: {
        width: 380,
        height: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#093902",
        borderTopWidth: 1
    },
    product_name: {
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 15,

    },
    tag_description_container: {
        width: 380,
        height: 45,
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#093902",
        borderTopWidth: 0
    },
    tag_description:{
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_description_container: {
        width: 380,
        height: 90,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#093902",
        borderBottomWidth: 0,
    },
    product_description: {
        fontSize: 26,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 10,
        textAlign: "center",
    },
    tag_quantity_container: {
        width: 380/2,
        height: 45,
        backgroundColor: "#0D4E03",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#093902",
        borderTopWidth: 0
    },
    tag_quantity:{
        color: "white",
        fontSize: 27,
        fontFamily: "NunitoSans_700Bold",
        textAlign: "center"
    },
    product_quantity_container: {
        width: 380/2,
        height: 45,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#093902",
        borderTopWidth: 1
    },
    product_quantity: {
        fontSize: 27,
        fontFamily: "NunitoSans_600SemiBold",
        color: "#707070",
        paddingHorizontal: 10
    },
    come_back: {
        paddingHorizontal: 20
    },
    come_back_text: {
        fontSize: 20
    }
    
})