import React from 'react';
import { View, Text, Button, StyleSheet,Image, StatusBar } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';



const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View style={{
            width:5,
            height:5,
            marginHorizontal:3,
            backgroundColor
        }}>
            
        </View>
    )


};

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        DotComponent= {Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#a6c7e6',
            image: <Image source={require('../assets/agroLogo.png')} />,
            title: '',
            subtitle: 'Reolutionizing Hydroponics For All',
          },
          {
            backgroundColor: '#F4D4A4',
            image: <Image source={require('../assets/agriculture.png')} />,
            title: 'Goal',
            subtitle: 'Agro-Q aims to revolutionize hydroponics and make maintaining hydroponic systems easier than ever. This is done through the use of sensors, microcontrollers, and cloud databases.',
          },
          {
            backgroundColor: '#C8CDCF',
            image: <Image source={require('../assets/motherboard.png')} />,
            title: 'Setup',
            subtitle: 'Before starting make sure to set up and connect the hardware to this app. For first time set up please follow the instructions on our supplemental AgroSense app. ',
          },
          {
            backgroundColor: '#E7E7EB',
            image: <Image source={require('../assets/github.png')} />,
            title: 'Setup',
            subtitle: 'For any help or concerns contact us on out github repository',
          },
        
        ]}
      />
    );
  };

export default OnboardingScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },


});