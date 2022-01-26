import React, {useState} from 'react'; 
import { View, TouchableHighlight , Text } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/style"
const moment = require("moment")

export default function DataInput({setState, date = new Date()}) {  
    const [show, setShow] = useState(false)
    date = moment(date).toDate()
    return (
        <>
            { show && 
            <DateTimePicker
              value = {date}
              display="calendar"
              style={{width: '80%', height: 50}}
              mode="datetime"
              onChange = { (event, date) => { setShow(false); setState(moment(date).toDate()); } }
            /> 
            }

            <View style = { { flexDirection: "row" } } >
              <TouchableHighlight onPressIn={ () => { setShow(true) } } underlayColor={null} style = { styles.date_box }>
                <Text style = { styles.date }  > { moment(date).format("DD/MM/YYYY") } </Text>
              </TouchableHighlight>
              <FontAwesomeIcon icon={faCalendarAlt} size={32} color='#707070'/>
            </View>
        </>
  );
}


  