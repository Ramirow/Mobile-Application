/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'
import YouTube from 'react-native-youtube';

const Yout = () => {


  const linkTest="https://www.youtube.com/watch?v=aqz-KE-bpKQ";

    return (
      <SafeAreaView style={styles.container}>

      <YouTube
      apiKey="AIzaSyCP7dpnv3TV7TQe92PQQZsCdQIqN"
      videoId={linkTest} // The YouTube video ID
      play // control playback of video with true/false
      fullscreen // control whether the video should play in fullscreen or inline
      loop // control whether the video should loop when ended
      onReady={e => this.setState({ isReady: true })}
      onChangeState={e => this.setState({ status: e.state })}
      onChangeQuality={e => this.setState({ quality: e.quality })}
      onError={e => this.setState({ error: e.error })}
      style={{ alignSelf: 'stretch', height: 300 }}
    />  


        </SafeAreaView>


         )
}


const styles= StyleSheet.create({
    container:{ backgroundColor:"white", flex:1},



})
export default Yout;