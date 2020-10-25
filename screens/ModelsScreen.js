import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';

const ModelsScreen = ({navigation}) => {
    return (
      <View style={{ flex:1, alignItems:"center", justifyContent: "center"}}>
        <Text>Monitor Screen</Text>
        <Button 
        title="Go to Details Screen"
        onPress={() => navigation.navigate('Details')}
        />
      </View>
  
    );
  };

export default ModelsScreen;