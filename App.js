/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View ,ScrollView ,SafeAreaView} from 'react-native';
import Menu from './components/menuComponent';
import TextComponent from './components/textComponent';
import Navigation from './components/Navigation';
import {Header,Button} from 'react-native-elements';
import { TextInput } from '@shoutem/ui';
import SearchBar from './components/SearchBar';
import AppHeader from './components/Header';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCP7dpnv3TV7TQe92PQQZsCdQIqN-GUHSk';
import VideoList from './components/VideoList';
// import ReactYouTube from './components/ReactYouTube';
import Yout from './components/Yout';
import VideoExample from './components/VideoExample';
import { WebView } from 'react-native-webview';
import { FlatList } from 'react-native';
import DateComponent from './components/DateComponent';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        team1:'',
        team2:'',
        game:'',
        selectedLabel:'',
        loading:false,
        videos:[],
        term:[],
        videoIds:[],
        date: '2020-02-10',
    };
}

changeGame = (game) => {
  this.setState({game:game});
}
changeTextOne = (team1) => {
    this.setState({ team1: team1});
  }
changeTextTwo = (team2) => {
  this.setState({ team2: team2});
}  

Show = (value) => {
  this.setState({selectedLabel:value});
  //alert(this.state.selectedLabel);
 }
 
 
PressSearch = (term) => {
   if (this.state.selectedLabel===''){
    alert('Please Fill The label');
  }
  else if (this.state.game === ''){
    alert('Please Fill Text one');
  // } else if (this.state.text2 === ''){
  //   alert('Please Fill Text Two');
  // } 
  }else {
this.searchYT(term);
}
}

searchYT = term => {
this.setState({loading:true});
YTSearch({key:API_KEY,term}, videos => {
alert(term);
// console.log(videos[0].id.videoId);
// console.log(videos);
this.setState({loading:false,
  videos,term,
});
// this.setState({videoId:videos[0].id.videoId});
videos.map(video => {
this.state.videoIds.push(video.id.videoId);
})
// for (let i = 0;i <= 5;i++){
//   this.state.videoIds.push(videos[i].id.videoId);
// }
// console.log(this.state.videoIds);
});}

DateChange = (date) => {
  this.setState({date:date});
}

  render(){
    const {team1,team2,game,selectedLabel,date} = this.state;
    const {loading,videos,term,videoIds} = this.state;
  return (
    <View style={{flex: 1}}>
      <View style = {{hight: 200}}>
            <AppHeader />
                 <Menu selectedLabel = {this.state.selectedLabel} Show = {this.Show}/> 
                 <TextComponent    OnchangeTextOne = {this.changeTextOne} OnchangeTexttwo = {this.changeTextTwo} text1 = {team1} 
                          text2 = {team2} game = {game} OnchangeTextGame = {this.changeGame} />
      
      <View>
      <DateComponent date = {this.state.date} onChangeDate = {this.DateChange} />
      </View>
  
         <SearchBar loading = {loading} game = {game}
           text1 = {team1} text2 = {team2} selectedLabel = {this.state.selectedLabel} 
           onPressSearch = {this.PressSearch} date = {date}/>
          </View>
      
         < VideoExample ids = {videoIds} />
       
      </View>
      

  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
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
  

});

export default App;