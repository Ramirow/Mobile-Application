/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
//import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {Picker} from 'react-native';


const  Menu = (props) =>  {

// constructor(props){
//      super(props);
//      this.state = {selectedLabel:''};
// }    

return (
    <View>
          <Text style = {{marginLeft:5, marginTop:5}}>Select Goals or Highlights </Text>
         <Picker 
         selectedLabel = {props.selectedLabel}
         onValueChange={props.Show.bind()}
         >
             <React.Item label = "Select item" value = "Select" color = "red" /> 
             <React.Item label = "Highlights" value ="Highlights" />     
             <React.Item label = "Goals" value = "Goals" /> 
          </Picker>  
          <Text style = {styles.text}> {props.selectedLabel} </Text> 
          
     </View>
      );
};

const styles = StyleSheet.create({
text: {
     marginTop: 10,
     paddingBottom: 5,
     paddingLeft: 5,
     backgroundColor: '#fff',
     color: '#424242',
     textAlign: 'center',
 }, 
});

export default Menu;

