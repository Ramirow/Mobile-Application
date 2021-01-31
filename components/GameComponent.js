/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 
const items = [{
    id: 'Europa League',
    name: 'Europa League'
  }, {
    id: 'Bundesliga',
    name: 'Bundesliga'
  }, {
    id: 'Premier League',
    name: 'Premier League'
  }, {
    id: 'Ligue 1',
    name: 'Ligue 1'
  }, {
    id: 'Serie A',
    name: 'Serie A'
  }, {
    id: 'Eredivisie',
    name: 'Eredivisie'
  }, {
    id: 'Primeira Liga',
    name: 'Primeira Liga'
  }, {
    id: 'La Liga',
    name: 'La Liga'
  }, {
    id: 'Champions league',
    name: 'Champions league'
    }
];
 
const  GameComponent = (props) =>  {
 
// constructor(props){
//         super(props);
//         this.state = {selectedLabel:''};
//   };
// this.state = {selectedLabel:''}

 
  
  
 
  // render() {
    // const { selectedItems } = this.state;
 
    return (
      <View style={{ flex: 1 ,marginBottom:10,marginLeft:10}}>
        <MultiSelect
          hideTags
          single = {true}
          items={items}
          uniqueKey="id"
          // ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={props.OnchangeLigue}
          selectedItems={props.selectedItems}
          selectText="Choose Tournament .."
          searchInputPlaceholderText="Search Ligue..."
          // onChangeInput={ (text)=> console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
          textColor="#000"
        />
        {/* <View>
          {this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View> */}
      </View>
    );
  }
//}

export default GameComponent;