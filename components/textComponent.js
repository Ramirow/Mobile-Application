/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import { ScrollView } from 'react-native';
import {View, Text, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
// import {TextInput } from 'react-native';
import {Icon} from 'react-native-vector-icons';
// import { TextInput } from 'react-native-paper';


const TextComponent =  (props) =>  {
        return (
            // <ScrollView>
            <View style={addItemStyles.wrapper}>
                <View>
                    <Text style = {{marginBottom:10}}>Choose your Teams:</Text>
                        
                    <View style={{flexDirection:'row'}}>
                        <View style={{flex:1,borderRadius: 10,borderWidth: 1,textAlign: 'center'}} >
                            <TextInput    onChangeText={(text) => props.OnchangeTextOne(text)}
                            placeholder="Team1" style={{justifyContent: 'flex-start',}} />
                        </View>  
                        <Text style = {{fontWeight: 'bold',marginLeft:3,marginRight:3,marginTop:7}}> VS </Text>
                        <View style={{flex:1,borderRadius: 10,borderWidth: 1,textAlign: 'center'}}>
                            <TextInput   onChangeText={(text) => props.OnchangeTexttwo(text)}
                            placeholder="Team2" style={{justifyContent: 'flex-end'}} />
                        </View>
                    </View>
                </View>
                <View style = {{marginTop:15,flexDirection : "row",marginBottom:20}}>
                      <Text > {props.text1} </Text>   
                      <Text  style = {{justifyContent: 'center', alignItems: 'center',fontWeight: 'bold',textAlign: 'center' }} > VS   </Text>
                      <Text > {props.text2} </Text> 
                </View>
                <View style = {{height:90}}>
                <Text style = {{marginBottom:10}}> Choose your game  </Text>
                <View style={{flex:1,borderRadius: 10,borderWidth: 2,textAlign: 'center', marginLeft:7}}>
                            <TextInput   onChangeText={(game) => props.OnchangeTextGame(game)}
                            placeholder="Game" style={{justifyContent: 'flex-end'}} />
                </View>
                        <Text style = {{textAlign:'center' ,marginTop:10}}> {props.game}</Text>     
            </View>  
            </View>
            // </ScrollView>      
        );
    }
  
  const addItemStyles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    inputLabels: {
        fontSize: 16,
        color: '#000000',
        marginBottom: 7,
    },
    inputField: {
        backgroundColor: '#EEEEEE',
        padding: 10,
        color: '#505050',
        height: 50
    },
    // inputWrapper: {
    //     paddingBottom: 20,
    // },
    saveBtn: {
        backgroundColor: '#003E7D',
        alignItems: 'center',
        padding: 12,
    },
    saveBtnText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    TextInputStyleClass:{
 
        // Setting up Hint Align center.
        textAlign: 'center',
         
        // Setting up TextInput height as 50 pixel.
        height: 50,
         
        // Set border width.
         borderWidth: 2,
         
         // Set border Hex Color Code Here.
         borderColor: '#FF5722',
         
        // Set border Radius.
         borderRadius: 20 ,
         
        //Set background color of Text Input.
         backgroundColor : '#FFFFFF',
         
        }

});


export default TextComponent;