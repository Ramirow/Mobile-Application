/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Video from 'react-native-video';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';



const  VideoExampleList = ({videId}) =>  {        
        return (
            <View>
            <WebView
            allowsFullscreenVideo
            allowsInlineMediaPlayback
            mediaPlaybackRequiresUserAction
            source={{ uri: 'https://www.youtube.com/embed/iNDHXuVGH6k' }} 
          />   
          </View>
    )}
        

export default VideoExampleList;
