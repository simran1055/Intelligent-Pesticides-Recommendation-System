import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import Tflite from 'tflite-react-native';
import * as ImagePicker from 'react-native-image-picker';
import { tsMethodSignature } from '@babel/types';
let tflite=new Tflite();
var modelFile="Pest/model_Pest1.tflite";
var labelsFile="Pest/labels_Pest.txt";
export default class PestDetect extends Component{
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
                this.setState({
                  recognitions:JSON.stringify(res)
                });
                if(res[0].label=="Acupalpus_dorsalis"){
                  this.setState({
                  re1:"It is Acupalpus dorsalis, so you can use Abamectin"})
                  }
                else if(res[0].label=="Acupalpus_meridianus"){
                  this.setState({
                  re1:"It is Acupalpus meridianus, so you can use Acephate"})
                }
                else if(res[0].label=="Aepus_marinus"){
                  this.setState({
                  re1:"It is Aepus marinus, so you can use Acephate"})
                }
                else if(res[0].label=="Agonum_ericeti"){
                  this.setState({
                  re1:"It is Agonum ericeti, so you can use Acetamiprid"})
                }
                else if(res[0].label=="Agonum_gracile"){
                  this.setState({
                  re1:"It is Agonum gracile, so you can use Alphamethrin"})
                }
                else if(res[0].label=="Agonum_marginatum"){
                  this.setState({
                  re1:"It is Agonum marginatum, so you can use Bifenthrin"})
                }
                else if(res[0].label=="Agonum_muelleri"){
                  this.setState({
                  re1:"so you can use Bifenthrin"})
                }
                else if(res[0].label=="Agonum_nigrum"){
                  this.setState({
                  re1:"so you can use Buprofezin"})
                }
                else if(res[0].label=="Agonum_thoreyi"){
                  this.setState({
                  re1:"so you can use Carbaryl"})
                }
                else if(res[0].label=="Agonum_versutum"){
                  this.setState({
                  re1:"so you can use Carbofuran"})
                }
                else if(res[0].label=="Agonum_viduum"){
                  this.setState({
                  re1:"so you can use Carbosulfan"})
                }
                else if(res[0].label=="Amara_aenea"){
                  this.setState({
                  re1:"so you can use Cartap Hydrochloride"})
                }
                else if(res[0].label=="Amara_anthobia"){
                  this.setState({
                  re1:"so you can use Cartap Hydrochloride"})
                }
                else if(res[0].label=="Amara_aulica"){
                  this.setState({
                  re1:"It is Amara aulica, so you can use Chlorfenapyr"})
                  this.setState({
                    re2:"यह अमारा औलिका है, इसलिए आप क्लोरफेनेपायर का उपयोग कर सकते हैं"
                  })
                }
                else if(res[0].label=="Amara_bifrons"){
                  this.setState({
                  re1:"so you can use Chlorantraniliprole"})
                }
                else if(res[0].label=="Amara_communis"){
                  this.setState({
                  re1:"so you can use Chlorfenapyr"})
                }
                else if(res[0].label=="Amara_familiaris"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Amara_lunicollis"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Amara_plebeja"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Anchomenus_dorsalis"){
                  this.setState({
                  re1:"so you can use Chromafenozide"})
                }
                else if(res[0].label=="Animalia"){
                  this.setState({
                  re1:"so you can use Clothianidin"})
                }
                else if(res[0].label=="Asaphidion_curtum"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Asaphidion_pallipes"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Asaphidion_stierlin"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Badister_bullatus"){
                  this.setState({
                  re1:"so you can use Deltamethrin"})
                }
                else if(res[0].label=="Badister_sodalis"){
                  this.setState({
                  re1:"so you can use Deltamethrin"})
                }
                else if(res[0].label=="Bembidion_aeneum"){
                  this.setState({
                  re1:"so you can use Diafenthiuron"})
                }
                else if(res[0].label=="Bembidion_biguttatum"){
                  this.setState({
                  re1:"so you can use Dichlorovos"})
                }
                else if(res[0].label=="Bembidion_bruxellense"){
                  this.setState({
                  re1:"so you can use Dicofol"})
                }
                else if(res[0].label=="Bembidion_dentellum"){
                  this.setState({
                  re1:"so you can use Diflubenzuron"})
                }
                else if(res[0].label=="Bembidion_fumigatum"){
                  this.setState({
                  re1:"so you can use Diflubenzuron"})
                }
                else if(res[0].label=="Bembidion_guttula"){
                  this.setState({
                  re1:"so you can use Dimethoate"})
                }
                else if(res[0].label=="Bembidion_iricolor"){
                  this.setState({
                  re1:"so you can use Dinotefuran"})
                }
                else if(res[0].label=="Bembidion_prasinum"){
                  this.setState({
                  re1:"so you can use Endosulfan"})
                }
                else if(res[0].label=="Bembidion_properans"){
                  this.setState({
                  re1:"so you can use Endosulfan"})
                }
                else if(res[0].label=="Bembidion_saxatile"){
                  this.setState({
                  re1:"so you can use Ethion"})
                }
                else if(res[0].label=="Bembidion_stephensii"){
                  this.setState({
                  re1:"so you can use Etofenprox"})
                }
                else if(res[0].label=="Bembidion_testaceum"){
                  this.setState({
                  re1:"so you can use Etofenprox"})
                }
                else if(res[0].label=="Blethisa_multipunctata"){
                  this.setState({
                  re1:"so you can use Fenpropathrin"})
                }
                else if(res[0].label=="Bradycellus_verbasci"){
                  this.setState({
                  re1:"so you can use Fenpropathrin"})
                }
                else if(res[0].label=="Broscus_cephalotes"){
                  this.setState({
                  re1:"so you can use Fenpyroximate"})
                }
                else if(res[0].label=="Calathus_ambiguus"){
                  this.setState({
                  re1:"so you can use Fenvalerate"})
                }
                else if(res[0].label=="Calathus_erratus"){
                  this.setState({
                  re1:"so you can use Fenvalerate"})
                }
                else if(res[0].label=="Calathus_melanocephalus"){
                  this.setState({
                  re1:"It is Calathus melancephalus, so you can use Fipronil"})
                  this.setState({
                    re2:"यह कैलाथस मेलेनसेफालस है, इसलिए आप फिप्रोनिल का उपयोग कर सकते हैं"
                  })
                }
                else if(res[0].label=="Calathus_micropterus"){
                  this.setState({
                  re1:"so you can use Fipronil"})
                }
                else if(res[0].label=="Callistus_lunatus"){
                  this.setState({
                  re1:"so you can use Fipronil"})
                }
                else if(res[0].label=="Calodromius_spilotus"){
                  this.setState({
                  re1:"so you can use Flubendiamide"})
                }
                else if(res[0].label=="Carabus_clatratus"){
                  this.setState({
                  re1:"so you can use Flubendiamide"})
                }
                else if(res[0].label=="Carabus_glabratus"){
                  this.setState({
                  re1:"so you can use Hexythiazox"})
                }
                else if(res[0].label=="Carabus_granulatus"){
                  this.setState({
                  re1:"so you can use Imidachloprid"})
                }
                else if(res[0].label=="Carabus_nemoralis"){
                  this.setState({
                  re1:"so you can use Imidachloprid"})
                }
                else if(res[0].label=="Carabus_nitens"){
                  this.setState({
                  re1:"so you can use Indoxacarb"})
                }
                else if(res[0].label=="Carabus_violaceus"){
                  this.setState({
                  re1:"so you can use Malathion"})
                }
                else if(res[0].label=="Chlaenius_nigricornis"){
                  this.setState({
                  re1:"so you can use Malathion"})
                }
                else if(res[0].label=="Cicindela_hybrida"){
                  this.setState({
                  re1:"so you can use Metaflumizone"})
                }
                else if(res[0].label=="Clivina_collaris"){
                  this.setState({
                  re1:"so you can use Metaldehyde"})
                }
                else if(res[0].label=="Clivina_fossor"){
                  this.setState({
                  re1:"so you can use Methomil"})
                }
                else if(res[0].label=="Cychrus_caraboides"){
                  this.setState({
                  re1:"so you can use Methyl Parathion"})
                }
                else if(res[0].label=="Demetrias_imperialis"){
                  this.setState({
                  re1:"so you can use Monocrotophos"})
                }
                else if(res[0].label=="Dromius_quadrimaculatus"){
                  this.setState({
                  re1:"so you can use Niclosamide"})
                }
                else if(res[0].label=="Druskažygiai"){
                  this.setState({
                  re1:"so you can use Novaluron"})
                }
                else if(res[0].label=="Dyschirius_impunctipennis"){
                  this.setState({
                  re1:"so you can use Permethrin"})
                }
                else if(res[0].label=="Dyschirius_obscurus"){
                  this.setState({
                  re1:"so you can use Phenthoate"})
                }
                else if(res[0].label=="Dyschirius_politus"){
                  this.setState({
                  re1:"so you can use Phorate"})
                }
                else if(res[0].label=="Elaphrus_lapponicus"){
                  this.setState({
                  re1:"so you can use Phosphamidon"})
                }
                else if(res[0].label=="Harpalus_affinis"){
                  this.setState({
                  re1:"so you can use Profenophos"})
                }
                else if(res[0].label=="Harpalus_serripes"){
                  this.setState({
                  re1:"so you can use Propergite"})
                }
                else if(res[0].label=="Laemostenus_complanatus"){
                  this.setState({
                  re1:"so you can use Pymetrozine"})
                }
                else if(res[0].label=="Leistus_ferrugineus"){
                  this.setState({
                  re1:"so you can use Quinalphos"})
                }
                else if(res[0].label=="Notiophilus_substriatus"){
                  this.setState({
                  re1:"so you can use Spinosad"})
                }
                else if(res[0].label=="Ocys_harpaloides"){
                  this.setState({
                  re1:"so you can use Spinosad"})
                }
                else if(res[0].label=="Paradromius_linearis"){
                  this.setState({
                  re1:"so you can use Spiromesifen"})
                }
                else if(res[0].label=="Patrobus_atrorufus"){
                  this.setState({
                  re1:"so you can use Temephos"})
                }
                else if(res[0].label=="Patrobus_septentrionis"){
                  this.setState({
                  re1:"so you can use Thiachloprid"})
                }
                else if(res[0].label=="Perileptus_areolatus"){
                  this.setState({
                  re1:"so you can use Thiodicarb"})
                }
                else if(res[0].label=="Philorhizus_melanocephalus"){
                  this.setState({
                  re1:"so you can use Thiamethoxam"})
                }
                else if(res[0].label=="Philorhizus_notatus"){
                  this.setState({
                  re1:"so you can use Thiamethoxam"})
                }
                else if(res[0].label=="Platyderus_depressus"){
                  this.setState({
                  re1:"so you can use Thiamethoxam"})
                }
                else if(res[0].label=="Pterostichus_adstrictus"){
                  this.setState({
                  re1:"so you can use Triazophos"})
                }
                else if(res[0].label=="Pterostichus_aethiops"){
                  this.setState({
                  re1:"so you can use Triazophos"})
                }
                else if(res[0].label=="Pterostichus_gracilis"){
                  this.setState({
                  re1:"so you can use Triazophos"})
                }
                else if(res[0].label=="Pterostichus_macer"){
                  this.setState({
                  re1:"so you can use Acephate"})
                }
                else if(res[0].label=="Pterostichus_minor"){
                  this.setState({
                  re1:"so you can use Chlorantraniliprole"})
                }
                else if(res[0].label=="Pterostichus_nigrita"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Pterostichus_quadrifoveolatus"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Pterostichus_rhaeticus"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Pterostichus_strenuus"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Pterostichus_vernalis"){
                  this.setState({
                  re1:"so you can use Chlorpyrifos"})
                }
                else if(res[0].label=="Tachys_micros"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Tachys_scutellaris"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Trechus_obtusus"){
                  this.setState({
                  re1:"so you can use Cypermethrin"})
                }
                else if(res[0].label=="Trechus_quadristriatus"){
                  this.setState({
                  re1:"so you can use Deltamethrin"})
                }
                else{
                  this.setState({
                  re1:"so you can use Ethion"})
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
              if(res[0].label=="Acupalpus_dorsalis"){
                this.setState({
                re1:"so you can use Abamectin"})
                }
              else if(res[0].label=="Acupalpus_meridianus"){
                this.setState({
                re1:"so you can use Acephate"})
              }
              else if(res[0].label=="Aepus_marinus"){
                this.setState({
                re1:"so you can use Acephate"})
              }
              else if(res[0].label=="Agonum_ericeti"){
                this.setState({
                re1:"so you can use Acetamiprid"})
              }
              else if(res[0].label=="Agonum_gracile"){
                this.setState({
                re1:"so you can use Alphamethrin"})
              }
              else if(res[0].label=="Agonum_marginatum"){
                this.setState({
                re1:"so you can use Bifenthrin"})
              }
              else if(res[0].label=="Agonum_muelleri"){
                this.setState({
                re1:"so you can use Bifenthrin"})
              }
              else if(res[0].label=="Agonum_nigrum"){
                this.setState({
                re1:"so you can use Buprofezin"})
              }
              else if(res[0].label=="Agonum_thoreyi"){
                this.setState({
                re1:"so you can use Carbaryl"})
              }
              else if(res[0].label=="Agonum_versutum"){
                this.setState({
                re1:"so you can use Carbofuran"})
              }
              else if(res[0].label=="Agonum_viduum"){
                this.setState({
                re1:"so you can use Carbosulfan"})
              }
              else if(res[0].label=="Amara_aenea"){
                this.setState({
                re1:"so you can use Cartap Hydrochloride"})
              }
              else if(res[0].label=="Amara_anthobia"){
                this.setState({
                re1:"so you can use Cartap Hydrochloride"})
              }
              else if(res[0].label=="Amara_aulica"){
                this.setState({
                re1:"It is Amara aulica, so you can use Chlorfenapyr"})
                this.setState({
                  re2:"यह अमारा औलिका है, इसलिए आप क्लोरफेनेपायर का उपयोग कर सकते हैं"
                })
              }
              else if(res[0].label=="Amara_bifrons"){
                this.setState({
                re1:"so you can use Chlorantraniliprole"})
              }
              else if(res[0].label=="Amara_communis"){
                this.setState({
                re1:"so you can use Chlorfenapyr"})
              }
              else if(res[0].label=="Amara_familiaris"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Amara_lunicollis"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Amara_plebeja"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Anchomenus_dorsalis"){
                this.setState({
                re1:"so you can use Chromafenozide"})
              }
              else if(res[0].label=="Animalia"){
                this.setState({
                re1:"so you can use Clothianidin"})
              }
              else if(res[0].label=="Asaphidion_curtum"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Asaphidion_pallipes"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Asaphidion_stierlin"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Badister_bullatus"){
                this.setState({
                re1:"so you can use Deltamethrin"})
              }
              else if(res[0].label=="Badister_sodalis"){
                this.setState({
                re1:"so you can use Deltamethrin"})
              }
              else if(res[0].label=="Bembidion_aeneum"){
                this.setState({
                re1:"so you can use Diafenthiuron"})
              }
              else if(res[0].label=="Bembidion_biguttatum"){
                this.setState({
                re1:"so you can use Dichlorovos"})
              }
              else if(res[0].label=="Bembidion_bruxellense"){
                this.setState({
                re1:"so you can use Dicofol"})
              }
              else if(res[0].label=="Bembidion_dentellum"){
                this.setState({
                re1:"so you can use Diflubenzuron"})
              }
              else if(res[0].label=="Bembidion_fumigatum"){
                this.setState({
                re1:"so you can use Diflubenzuron"})
              }
              else if(res[0].label=="Bembidion_guttula"){
                this.setState({
                re1:"so you can use Dimethoate"})
              }
              else if(res[0].label=="Bembidion_iricolor"){
                this.setState({
                re1:"so you can use Dinotefuran"})
              }
              else if(res[0].label=="Bembidion_prasinum"){
                this.setState({
                re1:"so you can use Endosulfan"})
              }
              else if(res[0].label=="Bembidion_properans"){
                this.setState({
                re1:"so you can use Endosulfan"})
              }
              else if(res[0].label=="Bembidion_saxatile"){
                this.setState({
                re1:"so you can use Ethion"})
              }
              else if(res[0].label=="Bembidion_stephensii"){
                this.setState({
                re1:"so you can use Etofenprox"})
              }
              else if(res[0].label=="Bembidion_testaceum"){
                this.setState({
                re1:"so you can use Etofenprox"})
              }
              else if(res[0].label=="Blethisa_multipunctata"){
                this.setState({
                re1:"so you can use Fenpropathrin"})
              }
              else if(res[0].label=="Bradycellus_verbasci"){
                this.setState({
                re1:"so you can use Fenpropathrin"})
              }
              else if(res[0].label=="Broscus_cephalotes"){
                this.setState({
                re1:"so you can use Fenpyroximate"})
              }
              else if(res[0].label=="Calathus_ambiguus"){
                this.setState({
                re1:"so you can use Fenvalerate"})
              }
              else if(res[0].label=="Calathus_erratus"){
                this.setState({
                re1:"so you can use Fenvalerate"})
              }
              else if(res[0].label=="Calathus_melanocephalus"){
                this.setState({
                re1:"so you can use Fipronil"})
              }
              else if(res[0].label=="Calathus_micropterus"){
                this.setState({
                re1:"so you can use Fipronil"})
              }
              else if(res[0].label=="Callistus_lunatus"){
                this.setState({
                re1:"so you can use Fipronil"})
              }
              else if(res[0].label=="Calodromius_spilotus"){
                this.setState({
                re1:"so you can use Flubendiamide"})
              }
              else if(res[0].label=="Carabus_clatratus"){
                this.setState({
                re1:"so you can use Flubendiamide"})
              }
              else if(res[0].label=="Carabus_glabratus"){
                this.setState({
                re1:"so you can use Hexythiazox"})
              }
              else if(res[0].label=="Carabus_granulatus"){
                this.setState({
                re1:"so you can use Imidachloprid"})
              }
              else if(res[0].label=="Carabus_nemoralis"){
                this.setState({
                re1:"so you can use Imidachloprid"})
              }
              else if(res[0].label=="Carabus_nitens"){
                this.setState({
                re1:"so you can use Indoxacarb"})
              }
              else if(res[0].label=="Carabus_violaceus"){
                this.setState({
                re1:"so you can use Malathion"})
              }
              else if(res[0].label=="Chlaenius_nigricornis"){
                this.setState({
                re1:"so you can use Malathion"})
              }
              else if(res[0].label=="Cicindela_hybrida"){
                this.setState({
                re1:"so you can use Metaflumizone"})
              }
              else if(res[0].label=="Clivina_collaris"){
                this.setState({
                re1:"so you can use Metaldehyde"})
              }
              else if(res[0].label=="Clivina_fossor"){
                this.setState({
                re1:"so you can use Methomil"})
              }
              else if(res[0].label=="Cychrus_caraboides"){
                this.setState({
                re1:"so you can use Methyl Parathion"})
              }
              else if(res[0].label=="Demetrias_imperialis"){
                this.setState({
                re1:"so you can use Monocrotophos"})
              }
              else if(res[0].label=="Dromius_quadrimaculatus"){
                this.setState({
                re1:"so you can use Niclosamide"})
              }
              else if(res[0].label=="Druskažygiai"){
                this.setState({
                re1:"so you can use Novaluron"})
              }
              else if(res[0].label=="Dyschirius_impunctipennis"){
                this.setState({
                re1:"so you can use Permethrin"})
              }
              else if(res[0].label=="Dyschirius_obscurus"){
                this.setState({
                re1:"so you can use Phenthoate"})
              }
              else if(res[0].label=="Dyschirius_politus"){
                this.setState({
                re1:"so you can use Phorate"})
              }
              else if(res[0].label=="Elaphrus_lapponicus"){
                this.setState({
                re1:"so you can use Phosphamidon"})
              }
              else if(res[0].label=="Harpalus_affinis"){
                this.setState({
                re1:"so you can use Profenophos"})
              }
              else if(res[0].label=="Harpalus_serripes"){
                this.setState({
                re1:"so you can use Propergite"})
              }
              else if(res[0].label=="Laemostenus_complanatus"){
                this.setState({
                re1:"so you can use Pymetrozine"})
              }
              else if(res[0].label=="Leistus_ferrugineus"){
                this.setState({
                re1:"so you can use Quinalphos"})
              }
              else if(res[0].label=="Notiophilus_substriatus"){
                this.setState({
                re1:"so you can use Spinosad"})
              }
              else if(res[0].label=="Ocys_harpaloides"){
                this.setState({
                re1:"so you can use Spinosad"})
              }
              else if(res[0].label=="Paradromius_linearis"){
                this.setState({
                re1:"so you can use Spiromesifen"})
              }
              else if(res[0].label=="Patrobus_atrorufus"){
                this.setState({
                re1:"so you can use Temephos"})
              }
              else if(res[0].label=="Patrobus_septentrionis"){
                this.setState({
                re1:"so you can use Thiachloprid"})
              }
              else if(res[0].label=="Perileptus_areolatus"){
                this.setState({
                re1:"so you can use Thiodicarb"})
              }
              else if(res[0].label=="Philorhizus_melanocephalus"){
                this.setState({
                re1:"so you can use Thiamethoxam"})
              }
              else if(res[0].label=="Philorhizus_notatus"){
                this.setState({
                re1:"so you can use Thiamethoxam"})
              }
              else if(res[0].label=="Platyderus_depressus"){
                this.setState({
                re1:"so you can use Thiamethoxam"})
              }
              else if(res[0].label=="Pterostichus_adstrictus"){
                this.setState({
                re1:"so you can use Triazophos"})
              }
              else if(res[0].label=="Pterostichus_aethiops"){
                this.setState({
                re1:"so you can use Triazophos"})
              }
              else if(res[0].label=="Pterostichus_gracilis"){
                this.setState({
                re1:"so you can use Triazophos"})
              }
              else if(res[0].label=="Pterostichus_macer"){
                this.setState({
                re1:"so you can use Acephate"})
              }
              else if(res[0].label=="Pterostichus_minor"){
                this.setState({
                re1:"so you can use Chlorantraniliprole"})
              }
              else if(res[0].label=="Pterostichus_nigrita"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Pterostichus_quadrifoveolatus"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Pterostichus_rhaeticus"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Pterostichus_strenuus"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Pterostichus_vernalis"){
                this.setState({
                re1:"so you can use Chlorpyrifos"})
              }
              else if(res[0].label=="Tachys_micros"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Tachys_scutellaris"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Trechus_obtusus"){
                this.setState({
                re1:"so you can use Cypermethrin"})
              }
              else if(res[0].label=="Trechus_quadristriatus"){
                this.setState({
                re1:"so you can use Deltamethrin"})
              }
              else{
                this.setState({
                re1:"so you can use Ethion"})
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
            <View style={{flex : 1,backgroundColor:'green'}}>
                <View style={{ marginTop:70,alignItems:'center' }}>
                    <Text style={{fontSize:40,fontWeight:'bold',color:'white'}}>Pest Detect</Text>
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  {recognitions ? (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Image source= {source} style={{width:250,height:250}}/>
                  <Text style={{color:'white',textAlign:'center',paddingTop:10,fontSize:15}}>
                    {re1}
                  </Text>
                  <Text style={{fontFamily:'KrutiDev010',color:'white',textAlign:'center',paddingTop:30,fontSize:15}}>
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