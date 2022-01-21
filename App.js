import React from 'react'; 
import { View, StyleSheet } from 'react-native';
import Stock from './screens/Stock';
import AppLoading from 'expo-app-loading';
import { useFonts, NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, NunitoSans_900Black } from '@expo-google-fonts/nunito-sans';

export default function App() {  
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular, NunitoSans_600SemiBold, NunitoSans_700Bold, NunitoSans_900Black 
  });

if (!fontsLoaded) {
return <AppLoading />;
} else {
  return (
    <View style = { styles.container } >
      <Stock/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems: "center",
   justifyContent: "center"
  }
})

