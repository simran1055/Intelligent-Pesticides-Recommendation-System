import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback, Alert} from 'react-native';
import Tflite from 'tflite-react-native';
import * as ImagePicker from 'react-native-image-picker';
import { tsMethodSignature } from '@babel/types';
let tflite=new Tflite();
var modelFile="models_leaf_mob/model_mob.tflite";
var labelsFile="models_leaf_mob/labels.txt";
export default class FlowerDetect extends Component{
    constructor(props){
        super(props);
        this.state={
            recognitions:null,
            source:null,
            re1:'',
            re2:'',
        };
      tflite.loadModel({model:modelFile,labels:labelsFile},(err,res)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(res);
                }
            });
        }
    selectGallaryImage=()=>{
        const options={};
        ImagePicker.launchImageLibrary(options,(response)=>{
          if(response.didCancel){
            console.log('User cancelled Image Picker')
            // console.log(response.assets[0])
          }
          else{
            let source1=response.assets[0].uri
            console.log("Main "+source1)
          }
            this.setState({
                source:{uri: response.assets[0].uri}
            });
            tflite.runModelOnImage({
            path: response.assets[0].uri,
              imageMean:128,
              imageStd:128,
              numResults:5,
              threshold:0.3, 
            },
              (err,res)=>{
              if(err){
                console.log("err"+err)
              }
              else{
                console.log("this "+JSON.stringify(res))
                console.log("this 1"+res)
                  this.setState({
                    recognitions:JSON.stringify(res)
                  });
                if(res[0].label=="Tomato___Bacterial_spot"){
                  this.setState({
        re1:"It is a Bacterial Spot, so you can use Propiconazole"})
      }
      else if(res[0].label=="Tomato___Early_blight"){
        this.setState({
        re1:"It is a Early blight, so you can use Bonide Liquide Copper Concentrate"})
        this.setState({
          re2:"यह एक अर्ली ब्लाइट है, इसलिए आप बोनाइड लिक्विड कॉपर कॉन्सेंट्रेट का उपयोग कर सकते हैं"
        })
      }
      else if(res[0].label=="Tomato___Late_blight"){
        this.setState({
        re1:"It is a Late blight disease, so you can use Mandipropamid and Chlorothalonil"})
      }
      else if(res[0].label=="Tomato___Leaf_Mold"){
        this.setState({
        re1:"It is a Leaf mold, so you can use Chlorothalonil, Maneb, Macozeb and Copper Formulations"})
      }
      else if(res[0].label=="Tomato___Septoria_leaf_spot"){
        this.setState({
        re1:"It is a Septoria Leaf spot disease, so you can use Chlorothalonil"})
        this.setState({
        re2:"यह एक सेप्टोरिया लीफ स्पॉट रोग है, इसलिए आप क्लोरोथालोनिल का उपयोग कर सकते हैं"})
      }
      else if(res[0].label=="Tomato___Spider_mites Two-spotted_spider_mite"){
        this.setState({
        re1:"It is a Spider mites or Two-spotted spider mite, so you can use Miticides used like Azobenzene and dicofol"})
      }
      else if(res[0].label=="Tomato___Target_Spot"){
        this.setState({
        re1:"It is a Target Spot, so you can use Strobilurin"})
      }
      else if(res[0].label=="Tomato___Tomato_Yellow_Leaf_Curl_Virus"){
        this.setState({
        re1:"It is Yellow Leaf Curl Virus, so you can use Neonicotinoid such as Thiamethoxam"})
        this.setState({
          re2:"यह येलो लीफ कर्ल वायरस है, इसलिए आप नियोनिकोटिनोइड जैसे थियामेथोक्सम का उपयोग कर सकते हैं"
        })
      }
      else if(res[0].label=="Tomato___Tomato_mosaic_virus"){
        this.setState({
        re1:"It is a mosaic virus, No fertilizer developed for this"})
        this.setState({
          re2:"यह एक मोज़ेक वायरस है, इसके लिए कोई उर्वरक विकसित नहीं किया गया है"
        })
      }
      else{
        this.setState({
        re1:"It is healthy leaf, No need of fertilizer"})
      }
    }
          })
        })
      }
    clickImage=()=>{
      const options={};
      ImagePicker.launchCamera(options,(response)=>{
        if(response.didCancel){
          console.log('User cancelled Image Picker')
        }
        else{
          console.log('S')
          let source2=response.assets[0].uri
          console.log("Main "+source2)
        }
        this.setState({
            source:{uri: response.assets[0].uri}
        });
        tflite.runModelOnImage({
        path: response.assets[0].uri,
          imageMean:128,
          imageStd:128,
          numResults:5,
          threshold:0.3, 
        },
          (err,res)=>{
          if(err){
            console.log("err"+err)
          }
          else{
            console.log("this "+JSON.stringify(res))
              this.setState({
                recognitions:JSON.stringify(res)
              });
              if(res[0].label=="Tomato___Bacterial_spot"){
                this.setState({
      re1:"It is a bacterial spot, so you can use Propiconazole"})
    }
    else if(res[0].label=="Tomato___Early_blight"){
      this.setState({
      re1:"It is a Early Blight, so you can use Bonide Liquide Copper Concentrate"})
      this.setState({
        re2:"यह एक अर्ली ब्लाइट है, इसलिए आप बोनाइड लिक्विड कॉपर कॉन्सेंट्रेट का उपयोग कर सकते हैं"
      })
    }
    else if(res[0].label=="Tomato___Late_blight"){
      this.setState({
      re1:"It is a Late blight disease, so you can use Mandipropamid and Chlorothalonil"})
    }
    else if(res[0].label=="Tomato___Leaf_Mold"){
      this.setState({
      re1:"It is a leaf mold, so you can use Chlorothalonil, Maneb, Macozeb and Copper Formulations"})
    }
    else if(res[0].label=="Tomato___Septoria_leaf_spot"){
      this.setState({
      re1:"It is a Septoria Leaf spot disease, so you can use Chlorothalonil"})
      this.setState({
        re2:"यह एक सेप्टोरिया लीफ स्पॉट रोग है, इसलिए आप क्लोरोथालोनिल का उपयोग कर सकते हैं"})
    }
    else if(res[0].label=="Tomato___Spider_mites Two-spotted_spider_mite"){
      this.setState({
      re1:"It is spider mites or two-spotted spider mite, so you can use Miticides used like Azobenzene and dicofol"})
    }
    else if(res[0].label=="Tomato___Target_Spot"){
      this.setState({
      re1:"It is a target spot, so you can use Strobilurin"})
    }
    else if(res[0].label=="Tomato___Tomato_Yellow_Leaf_Curl_Virus"){
      this.setState({
      re1:"It is Yellow Leaf Curl Virus, so you can use Neonicotinoid such as Thiamethoxam"})
      this.setState({
        re2:"यह येलो लीफ कर्ल वायरस है, इसलिए आप नियोनिकोटिनोइड जैसे थियामेथोक्सम का उपयोग कर सकते हैं"
      })
    }
    else if(res[0].label=="Tomato___Tomato_mosaic_virus"){
      this.setState({
      re1:"It is a mosaic virus, No fertilizer developed for this"})
      this.setState({
        re2:"यह एक मोज़ेक वायरस है, इसके लिए कोई उर्वरक विकसित नहीं किया गया है"
      })
    }
    else{
      this.setState({
      re1:"It is a healthy leaf, No need of fertilizer"})
    }
            }
          })
        })
  }
    render(){
      const {recognitions,source,re1,re2}=this.state;
      const re=JSON.parse(recognitions)
      console.log(re)
        return(
            <View style={{flex : 1,backgroundColor:'#75c275'}}>
                <View style={{ marginTop:20,alignItems:'center' }}>
                    <Text style={{fontSize:30,fontWeight:'bold',color:'white'}}>Leaves Disease Detect</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  {recognitions ? (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image source= {source} style={{width:224,height:224,paddingBottom:20}}/>
                  <Text style={{color:'white',textAlign:'center',paddingTop:10,fontSize:20}}>
                    {re1}
                  </Text>
                  <Text style={{fontFamily:'KrutiDev010',color:'white',textAlign:'center',paddingTop:30,fontSize:20}}>
                    {re2}
                  </Text>
                  </View>):(<Image source={require('../Assets/flower.png')} style={{width:250,height:250}}/>)}
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={this.selectGallaryImage.bind(this)}>
                        <View style={{width:200,height:57,backgroundColor:'#DDDDDD',borderRadius:8,marginLeft:'23%',marginBottom:30}}>
                            <Text style={{padding:20,color:'black',fontWeight:'bold',textAlign:'center'}}>
                                Library
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.clickImage.bind(this)}>
                        <View style={{width:200,marginLeft:'23%',marginBottom:30,height:57,backgroundColor:'#DDDDDD',borderRadius:8}}>
                            <Text style={{padding:20,paddingLeft:60,color:'black',fontWeight:'bold'}}>
                                Take a Photo
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}