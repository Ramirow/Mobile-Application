/* eslint-disable semi-spacing */
/* eslint-disable no-const-assign */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// Load the module
 
import Video from 'react-native-video';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView ,SafeAreaView} from 'react-native';
import { WebView } from 'react-native-webview';
import { FlatList } from 'react-native';
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
 
 const  VideoExample = ({ids}) =>  {
    // const videoItems = videos.map(video => (
    //     <VideoExampleList
    //     key = {video.etag}
    //     video = {video}
    //     />
    // ));   
        
        return (
            <React.Fragment>
              <ScrollView>
            <WebView style = {styles.containerStyle}
                  allowsFullscreenVideo
                  allowsInlineMediaPlayback
                  mediaPlaybackRequiresUserAction 
                  source={{ uri: 'https://www.youtube.com/embed/' + ids[0] }} 
                />    
                <WebView style = {styles.containerStyle}
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: 'https://www.youtube.com/embed/' + ids[1] }} 
              />
              <WebView style = {styles.containerStyle}
                allowsFullscreenVideo
                allowsInlineMediaPlayback
                mediaPlaybackRequiresUserAction
                source={{ uri: 'https://www.youtube.com/embed/' + ids[2] }} 
              />
               </ScrollView> 
            </React.Fragment>   
              
            );
            
        }
            
            const styles = {
                containerStyle:{
                  marginTop:10,
                  marginBottom:10,
                  marginLeft:10,
                  marginRight:10,
                  height:150,
                },container: {
                  flex: 1,
                  // backgroundColor: '#ddd',
                  // alignItems: 'center',
                  // justifyContent: 'center',
                  // marginVertical:200,
                },
                scrollView: {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height:3000,
                },
            };
export default VideoExample;