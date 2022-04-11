import React,{Component} from 'react'
import {View,Text,StyleSheet,SafeAreaView, Alert,TextInput,TouchableOpacity,TouchableHighlight} from 'react-native'
import {Card} from 'react-native-elements'
class Login extends Component{
    constructor(props){
        super(props)
        this.state={Email: '',Password: '' };
    }
    press=()=>{
        // this.props.navigation.navigate("Email");
        Alert.alert('Pressed')
    }
    search=()=>{
        fetch('https://ownershipchain1.000webhostapp.com/login.php', {method: 'POST',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
  body: JSON.stringify({
    Email: this.state.Email,
    Password:this.state.Password
})
  }).then((response) => response.json())
  .then((responseJson) => {
    if(responseJson === 'Data Matched')
    {
        // Alert.alert('LOGIN','User login seccessfully').then(
        this.props.navigation.navigate('Home')

    }
    else{

      Alert.alert(responseJson);
    }
  }).catch((error) => {
    console.error(error);
  });
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {/* <Text style={{fontSize:30,textAlign:'center',color:'green',fontWeight:'bold'}}>
                        LOGIN
                    </Text> */}
                    <Card styles={{borderRadius:8}}>
                            <Text style={styles.label}>
                                Username
                            </Text>
                            <TextInput onChangeText={(value) => this.setState({ Email: value })} style={styles.textInput} value={this.state.Email} />
                            <Text style={styles.label}>
                                Password
                            </Text>
                            <TextInput onChangeText={(value) => this.setState({ Password: value })} style={styles.textInput} value={this.state.Password} secureTextEntry={true} />
                    </Card>
                </View>
                <View style={{marginBottom:'10%'}}>
                    <TouchableOpacity activeOpacity={0.7} style={{ paddingVertical: 10, backgroundColor: '#DDDDDD', marginLeft: 90, marginRight: 90, borderRadius: 10 }}>
                        <View>
                            <Text style={{ textAlign: 'center', color: 'green', fontWeight: 'bold', fontSize: 20 }} onPress={this.search}>
                                Login
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
export default Login; 