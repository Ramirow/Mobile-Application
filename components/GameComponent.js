/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
 
const items = [{
    id: '92iijs7yta',
    name: 'Europa League'
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Bundesliga'
  }, {
    id: '16hbajsabsd',
    name: 'Premier League'
  }, {
    id: 'nahs75a5sg',
    name: 'Ligue 1'
  }, {
    id: '667atsas',
    name: 'Serie A'
  }, {
    id: 'hsyasajs',
    name: 'Eredivisie'
  }, {
    id: 'djsjudksjd',
    name: 'Primeira Liga'
  }, {
    id: 'sdhyaysdj',
    name: 'La Liga'
  }, {
    id: 'suudydjsjd',
    name: 'Champions league'
    }
];
 
const  GameComponent = (props) =>  {
 
// constructor(props){
//         super(props);
//         this.state = {selectedLabel:''};
//   };
// this.state = {selectedLabel:''}

 
  
  const onSelectedItemsChange = selectedItems => {
    // this.setState({ selectedItems:'' });
    // this.setState({ selectedItems });
    props.OnchangeLigue(selectedItems);
  };
 
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
          onSelectedItemsChange={onSelectedItemsChange}
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