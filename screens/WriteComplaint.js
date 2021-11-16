import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Header} from 'react-native-elements';
import db from '../config'
const bg = require("../assets/tk.png");
// import firebase from 'firebase'
 
export default class WriteComplaint extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            student: '',
            query: '',
        }
    }

    submitQuery = ()=>{
        db.collection("complaints").add({
            title : this.state.title,
            student: this.state.student,
            query: this.state.query

        })
        this.setState({
            title :'',
            student:'',
            query:''
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source = {bg}>
                <Header 
                    backgroundColor = {'#c070ee'}
                     centerComponent = {{
                        text : 'Complaint Forum',
                        style : { color: 'black', fontSize: 20,fontWeight:'bold',fontFamily: 'cursive'}
                    }}
                />
                <TextInput 
                    placeholder="Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Student Name"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            student: text
                        })
                    }}
                    value={this.state.student}
                    style={styles.author} />
                <TextInput 
                    placeholder="Your Complaint/Query"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            query: text
                        })
                    }}
                    value={this.state.query}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                   onPress = {this.submitQuery}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 40,
      borderRadius: 20,
      margin: 10,
      color:'black',
      padding: 6,
      fontFamily: 'cursive'

  },
  author: {
      height: 40,
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
       padding: 6,
       fontFamily: 'cursive'
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      borderRadius: 20,
      margin: 10, 
      padding: 6,
      fontFamily: 'cursive'
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: '#c60aaa',
      width: 80,
      borderRadius: 40,
      height: 40,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
      fontFamily: 'cursive'
  }
});
