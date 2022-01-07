import React,{useEffect, useState} from 'react'; 
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import style from "./styles/style"
import PageHeader from './components/hearder';
import PageFooter from './components/footer';
const Requests = require("./controllers/request-control")

export default function App() {
  return <>
    <StatusBar/>
    <PageHeader/>
    <PageFooter/>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});