/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';
// import { createUseStyles } from 'react-jss';
import  {NavigationBar}  from '@shoutem/ui';
import {Icon} from 'react-native-vector-icons';
import {Button} from 'react-native';
import  {Title}  from 'react-native-paper';

// const useStyles = createUseStyles({
//   wrapper: {
//     borderBottom: 'black solid 1px',
//     padding: [15, 10],
//     textAlign: 'right',
//   }
// });

export default class Navigation extends React.Component{
  render (){
  return(
    <NavigationBar
  leftComponent={<Icon name="sidebar" />}
  centerComponent={<Title>TITLE</Title>}
  rightComponent={(
      <Icon name="cart" />
  )}
/>
  );
}
}