/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView,View} from 'react-native';
import VideoListItem from './VideoListItem';

const VideoList = ({videos,term} ) => {
 const videoItems = videos.map(video => (
    <VideoListItem
    key = {video.etag}
    video = {video}
    term = {term}
    />
));   

return (
<ScrollView >
<View style = {styles.containerStyle }>
 {videoItems}
</View>
</ScrollView>
)};

const styles = {
    containerStyle:{
      marginBottom:10,
      marginLeft:10,
      marginRight:10,

    }
};


export default VideoList;