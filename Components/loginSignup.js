// import react from 'react';
import React,{Component} from 'react';
import {View,Text,TouchableWithoutFeedback,Image} from 'react-native';

export default class LoginSignup extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',backgroundColor:'green'}}>
                <View style={{ marginTop:70,alignItems:'center',paddingBottom:30}}>
                    <Image source={require('../Assets/flower.png')} style={{width:250,height:250,marginBottom:40}}/>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Intelligent Pesticides Recomendation</Text>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>System</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Signup')}>
                    <View style={{width:200,height:57,backgroundColor:'#DDDDDD',borderRadius:8,marginLeft:'23%',marginBottom:30}}>
                        <Text style={{padding:20,color:'black',fontWeight:'bold',textAlign:'center'}}>
                            Signup
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Login')}>
                    <View style={{width:200,marginLeft:'23%',marginBottom:30,height:57,backgroundColor:'#DDDDDD',borderRadius:8}}>
                        <Text style={{padding:20,paddingLeft:85,color:'black',fontWeight:'bold'}}>
                            Login
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}