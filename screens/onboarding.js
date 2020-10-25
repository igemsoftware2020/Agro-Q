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
            title: 'Helpful',
            subtitle: 'Agro-Q aims to revolutionize hydroponics',
          },
          {
            backgroundColor: '#C8CDCF',
            image: <Image source={require('../assets/motherboard.png')} />,
            title: 'Setup',
            subtitle: 'Follow instructions in the agroQ app',
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