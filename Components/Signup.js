import React,{Component} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {View,Text,Alert,TextInput,TouchableOpacity,StyleSheet,Image} from 'react-native';
import {Card} from 'react-native-elements'
export default class Signup extends Component{
    constructor(props){
        super(props)
        this.state={Name: '',ContactNumber: '',Password: '' };
    }
    search3=()=>{
        if(this.state.Password.length>6){
            this.search()
        }
        else{
            Alert.alert('SIGNUP','Password is less than 6');
        }
    }
    search2=()=>{
        if(this.state.ContactNumber.length==10){
            this.search3()
        }
        else{
            Alert.alert('SIGNUP','Contact Number is wrong');
        }
    }
    // search1=()=>{
    //     if(this.state.Email.includes('@')){
    //         this.search2()
    //     }
    //     else{
    //         Alert.alert('SIGNUP','Email id is wrong');
    //     }
    // }
    fetchh=()=>{
        this.props.navigation.navigate("Login");
    }
    search=()=>{
        fetch('https://ownershipchain1.000webhostapp.com/signup.php', {method: 'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
  body: JSON.stringify({
    Name: this.state.Name,
    // Email: this.state.Email,
    Contact:this.state.ContactNumber,
    Password:this.state.Password
})
  }).then((response) => response.json())
  .then((responseJson) => {
    if(responseJson=='User Registered Successfully'){
    this.fetchh();
  }
  else{
    Alert.alert("Unsuccessfull Try")
  }
  }).catch((error) => {
    console.error(error);
  });
}
    render(){
        return(
            <SafeAreaView style={styles.container}>
            <View style={styles.container}>
            <Card styles={{borderRadius:8}}>
            <Text style={styles.label}>
                Username
            </Text>
            <TextInput onChangeText={(value) => this.setState({ Name: value })} style={styles.textInput} value={this.state.Name} />
                <Text style={styles.label}>
                    Contact Number
                </Text>
                <TextInput onChangeText={(value) => this.setState({ ContactNumber: value })} style={styles.textInput} value={this.state.ContactNumber} />
                <Text style={styles.label}>
                    Password
                </Text>
                <TextInput onChangeText={(value) => this.setState({ Password: value })} style={styles.textInput} value={this.state.Password} secureTextEntry={true} />
                </Card>
            </View>
            <View style={{marginBottom:'10%'}}>
            <TouchableOpacity activeOpacity={0.7} style={{ paddingVertical: 10, backgroundColor: '#DDDDDD', marginLeft: 90, marginRight: 90, borderRadius: 10 }}>
                <View>
                    <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', fontSize: 20 }} onPress={this.search2}>
                        Sign Up
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    textInput: {
        marginLeft: 20,
        height: 40,
        borderBottomWidth: 1,
        marginRight: 20,
        borderBottomColor: 'green',
        color:'green'
        },
        label: {
            marginLeft: 20,
            fontSize: 20,
            color: 'green',
            marginBottom: 5,
            marginTop: '10%',
    
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor:'#75c275'
        },
        text: {
            color: 'green',
            fontSize: 20
        }
    })