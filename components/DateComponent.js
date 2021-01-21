/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useState,Component} from 'react';
import DatePicker from 'react-native-datepicker';
import { StyleSheet, Text, View} from 'react-native';
// import DatePicker from '@react-native-community/datetimepicker';
import Calendar from 'react-native-calendar-component';
import { DateInput } from 'react-native-date-input';
import dayjs from 'dayjs';
import "../node_modules/react-datepicker/dist/react-datepicker.min.js"
import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';

 
const DateComponent = (props) =>  {
  
  const [startDate,setselectedDate] = useState(null);
  // const MyContainer = ({ className, children }) => {
  //   return (
  //     <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
  //       <CalendarContainer className={className}>
  //         <div style={{ background: "#f0f0f0" }}>
  //           What is your favorite day?
  //         </div>
  //         <div style={{ position: "relative" }}>{children}</div>
  //       </CalendarContainer>
  //     </div>
  //   );
  // };
        return (
          <React.Fragment>
          <Text style = {{marginLeft:10}}> Please choose the Date : </Text>
          <View style = {{marginBottom:10,marginTop:10,marginLeft:10}}>
          <DatePicker date = {props.date}
            // onChange={(date) =>  props.onDateChange(date)}
            onDateChange = {(date) => props.onChangeDate(date)}
          />
          </View>
          </React.Fragment>  

        )
    }



export default DateComponent;