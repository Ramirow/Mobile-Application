/* eslint-disable no-trailing-spaces */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React,{Component} from 'react';
import {View,StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-elements';

 const SearchBar = (props) => { 

return (
<View> 
<Button title = {props.loading ? 'Loading ...' : 'Search'} buttonStyle = {styles.buttonStyle}
      onPress = {({search = props.selectedLabel + ' ' + props.text1 + ' VS ' + props.text2 + ' ' + props.game.toString() + ' ' + props.date}) => props.onPressSearch(search)}
      />
</View>    
)};

const styles = StyleSheet.create({
buttonStyle : {
    // height:30,
    marginBottom:8,
  }
});

export default SearchBar;