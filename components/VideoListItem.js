/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
import { WebView } from 'react-native-webview';

const  VideoListItem = ({video,term}) => {


return (
<View> 
{/* <TouchableOpacity  > 
 <Image style = {styles.imageStyle}
 source = {{uri:video.snippet.thumbnails.medium.url}}
 />
 </TouchableOpacity>
 <Text>{video.snippet.title} </Text>
 <Text> {video.snippet.channelTitle}</Text>
 <Text> {video.snippet.description } </Text>  */}
<Text> Hello </Text>
<WebView
allowsFullscreenVideo
allowsInlineMediaPlayback
mediaPlaybackRequiresUserAction
source={{ uri: 'https://www.youtube.com/embed/iNDHXuVGH6k'}} 
/>    
</View>

);
};

const styles = {
    imageStyle:{alignSelf:'stretch',height:180},
        backgroundVideo: {
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        },
}

export default  VideoListItem;