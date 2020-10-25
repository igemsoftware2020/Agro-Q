import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const LoginScreen = ({navigation}) => {
    return (
      <View style={{ flex:1, alignItems:"center", justifyContent: "center"}}>
        <Text>THIS PAGE IS UNDER DEVELOPMENT</Text>
        <Button 
        title="Learn More about this"
        onPress={() => navigation.navigate('Home')}
        />
      </View>
  
    );
  };

export default LoginScreen;