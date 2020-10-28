import React, { useState, useEffect } from "react";
import { View, Text, Image,Button, StyleSheet, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import firebase from '@react-native-firebase/app';
import { firebaseApp } from '../environment/config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart, YAxis, Grid } from 'react-native-svg-charts';
import { DBInteraction } from '../environment/db';





import Block from "../components/Block";
import Icon from "../components/Icon";
import Card from "../components/Card";


var firstData=null;
const HomeScreen = ({navigation}) => {
  console.log("starting");
  const[hsystem, setHsystem]= useState({});
  
  
  var stylerco2;
  var iconUsedco2;
  var stylertemp;
  var iconUsedtemp;
 
  var systemHealth = 0;
  
  var stylerhumidity;
  var iconUsedhumidity;
  
  var stylerph;
  var iconUsedph;
  
  var stylerwaterTemp;
  var iconUsedwaterTemp;
  
  var stylersyshealth ;
  var iconUsedsyshealth ;
  const checkValidity= ()=>{
    
  console.log('this temp: '+ global.temp)
  if (global.temp > 18 && global.temp < 26){
    stylertemp = styles.categoryIcon2;
    iconUsedtemp = "checkmark";
  }else {
    stylertemp = styles.categoryIcon3;
    iconUsedtemp = "alert-outline";

  }
  if (global.humidity > 60 && global.humidity < 70){
    stylerhumidity = styles.categoryIcon2;
    iconUsedhumidity = "checkmark";
  }else {
    stylerhumidity = styles.categoryIcon3;
    iconUsedhumidity = "alert-outline";
    systemHealth=systemHealth+1;

  }
  if (global.ph > 60 && global.ph < 70){
    stylerph = styles.categoryIcon2;
    iconUsedph = "checkmark";
  }else {
    stylerph = styles.categoryIcon3;
    iconUsedph = "alert-outline";
    systemHealth=systemHealth+1;

  }
  if (global.co2 > 400 && global.co2 < 1500){
    stylerco2 = styles.categoryIcon2;
    iconUsedco2 = "checkmark";
  }else {
    stylerco2 = styles.categoryIcon3;
    iconUsedco2 = "alert-outline";
    systemHealth=systemHealth+1;

  }
  if (global.waterTemp > 18 && global.waterTemp < 26){
    stylerwaterTemp = styles.categoryIcon2;
    iconUsedwaterTemp = "checkmark";
  }else {
    stylerwaterTemp = styles.categoryIcon3;
    iconUsedwaterTemp = "alert-outline";
    systemHealth=systemHealth+1;

  }
  
  if  (systemHealth > 2) {
    stylersyshealth = styles.categoryIcon3;
    iconUsedsyshealth = "alert-outline";

  } else{
    stylersyshealth = styles.categoryIcon;
    iconUsedsyshealth = "happy";
   
  }
  

  };



 useEffect(() => {
    console.log("useeffect");
    
    const fetch= async()=>{
      console.log("fetch start");
      const xDB = new DBInteraction();
    var finalData =await xDB.getCurrentData('lambert');
    console.log(finalData);
    
     setHsystem(finalData);
     console.log("the temp" + finalData.Temp);
     //Initializing variabbles for app use
     global.temp = finalData.Temp;
     global.co2=finalData.co2;
     global.ph=finalData.Ph;
     global.humidity=finalData.humidity;
     global.longitude=finalData.longitude;
     global.latitude=finalData.latitude;
     global.light=finalData.light;
     global.location= finalData.location;
     global.time=finalData.time;
     global.waterTemp=finalData.waterTemp;
     checkValidity();

     console.log("ph"+global.ph);

  
    
    // firstData = finalData
   
    
    }
     if ( firstData ==null) 
      fetch();
    
  },
 
  []);


  
  
    return (

      
      
       
      <ScrollView style= {styles.container}>
         <View style={styles.sliderContainer}>
        <Swiper autoplay horizontal= {false}height={200} activeDotColor="#90ee90">
          <View style={styles.slide}>
            <Image
            source = {{uri: "https://news.uns.purdue.edu/images/2019/nemali-hydroponics.jpg"}}
            resizeMode="cover"
            style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
            source = {{uri: "https://i.ytimg.com/vi/9gfgqLNarQY/maxresdefault.jpg"}}
            resizeMode="cover"
            style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
            source = {{uri: "http://1.bp.blogspot.com/-GvZ61lz2n_w/U2yyPn3JVzI/AAAAAAAABbk/r1FYvia1W_k/s1600/weibo-cambodia+(2).JPG"}}
            resizeMode="cover"
            style={styles.sliderImage}
            />

          </View>
          
        </Swiper>
  
        </View>
        <View>

          <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}>
          <View style={{flexDirection:"row", justifyContent:"center"}}>
            <Text style={{marginTop:17, fontWeight: 'bold', fontSize:20 }}>System Health:    </Text>
          <View style={stylersyshealth}>
            <Ionicons name={iconUsedsyshealth} size={35} color="#013220" />
          </View>
          </View>
          
        </TouchableOpacity>
        

          </View>
        </View>
        <Text
          style={{
            paddingTop: 10,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          System Statistics
        </Text>

       

        <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
            <View style={stylertemp}>
            <Ionicons name={iconUsedtemp} size={35} color="#013220" />
                                          
          </View>
          
        <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Temp:{hsystem.Temp} </Text>
       
        
              <Text paragraph color="gray">Celcius</Text>
            </Card>
        
        
            
            <Card middle style={{ marginLeft: 7 }}>
            <View style={stylerhumidity}>
            <Ionicons name={iconUsedhumidity} size={35} color="#013220" />
          </View>
        <Text h2 style={{marginTop: 17,fontSize: 18,fontWeight: 'bold', }}>Humidity: {hsystem.humidity}</Text>
        
              <Text paragraph color="gray">Percent</Text>
            </Card>
          </Block>

          



   
          <TouchableOpacity>
       

        <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
            <View style={styles.categoryIcon2}>
            <Ionicons name="checkmark" size={35} color="#013220" />
          </View>
              <Text h2 style={{marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Light: {hsystem.light}</Text>
              <Text paragraph color="gray">Lumens</Text>
              
            </Card> 
        
        
            
            <Card middle style={{ marginLeft: 7 }}>
            <View style={stylerwaterTemp}>
            <Ionicons name={iconUsedwaterTemp} size={35} color="#013220" />
          </View>
        <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Water: {hsystem.waterTemp}</Text>
              <Text paragraph color="gray">Celcius</Text>
            
            </Card>
          </Block>

          



          </TouchableOpacity>

          <TouchableOpacity>
       

        <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
            <View style={stylerco2}>
            <Ionicons name={iconUsedco2} size={35} color="#013220" />
          </View>
        <Text  h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold', }}>Co2: {hsystem.co2}</Text>
              <Text paragraph color="gray">PPMs</Text>
            </Card>
        
        
            
            <Card middle style={{ marginLeft: 7 }}>
            <View style={stylerph}>
            <Ionicons name={iconUsedph} size={35} color="#013220" />
          </View>
              <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold', }}>PH: {hsystem.Ph}</Text>
              <Text paragraph color="gray">logarithm of H+</Text>
            </Card>
          </Block>

          



          </TouchableOpacity>

          <View
          style={{paddingBottom:10}}>


          </View>






    
  
{/* 
<View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          System Statistics
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Image
              source={{uri:"https://openclipart.org/image/2400px/svg_to_png/196364/check.png"}}
              resizeMode="cover"
              style={styles.cardImg}/>
          </View>
          <View style={styles.cardInfo}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.cardTitle}>PH:</Text>
          
            <Text style={styles.cardDetails}>
              4.2
            </Text>
            </View>
          </View>
          

        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Image
              source={{uri:"https://openclipart.org/image/2400px/svg_to_png/196364/check.png"}}
              resizeMode="cover"
              style={styles.cardImg}/>
          </View>
          <View style={styles.cardInfo}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.cardTitle}>PH:</Text>
          
            <Text style={styles.cardDetails}>
              4.2
            </Text>
            </View>
          </View>
          

        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Image
              source={{uri:"https://openclipart.org/image/2400px/svg_to_png/196364/check.png"}}
              resizeMode="cover"
              style={styles.cardImg}/>
          </View>
          <View style={styles.cardInfo}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.cardTitle}>PH:</Text>
          
            <Text style={styles.cardDetails}>
              4.2
            </Text>
            </View>
          </View>
          

        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
          <Image
              source={{uri:"https://openclipart.org/image/2400px/svg_to_png/196364/check.png"}}
              resizeMode="cover"
              style={styles.cardImg}/>
          </View>
          <View style={styles.cardInfo}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles.cardTitle}>PH:</Text>
          
            <Text style={styles.cardDetails}>
              4.2
            </Text>
            </View>
          </View>
          

        </View>

          </View>
       */}

      </ScrollView>
  
    );
      };
export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  margin: {
    marginHorizontal: 25,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 60,
    height: 60,
    backgroundColor: '#d2f8d2' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
 
    width: 60,
    height: 60,
    backgroundColor: '#d2f8d2' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryIcon3: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
 
    width: 60,
    height: 60,
    backgroundColor: '#FF7276' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 30,

  },
  cardDetails: {
    fontSize: 30,
    color: '#444',
  },

});