import React, {useState} from 'react'; 
import { View, StyleSheet, TouchableHighlight , Text } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker"
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold } from '@expo-google-fonts/nunito-sans';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
const moment = require("moment")

export default function DataInput() {  
    const [show, setShow] = useState(false)
    const [date, setDate] = useState()
    let [fontsLoaded] = useFonts({
      NunitoSans_400Regular, NunitoSans_700Bold, NunitoSans_600SemiBold
    });
  
  if (!fontsLoaded) {
  return <AppLoading />;
  } else {
    return (
        <>
            { show && <DateTimePicker
            value = {moment().toDate()}
            display="calendar"
            style={{width: '80%', height: 50}}
            mode="datetime"
            onChange = { (event, date) => { setDate(date);setShow(false) } }
            /> }
            <View style = { { flexDirection: "row" } } >
              <TouchableHighlight onPressOut={() => { setShow(true) }} underlayColor={null} style = {{ width: 180, height: 32, alignItems: "center", justifyContent: "center", borderRadius: 15, borderWidth: 2, borderColor: "#707070", marginRight: 12 }}>
                <Text style = {{ fontFamily: "NunitoSans_400Regular", color: "#707070", fontSize: 18, textDecorationLine: "underline" }} > { moment(date).format("DD/MM/YYYY") } </Text>
              </TouchableHighlight>
              <FontAwesomeIcon icon={faCalendarAlt} size={32} color='#707070'/>
            </View>
        </>
  );
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    }
  })
  