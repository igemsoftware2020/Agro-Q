import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import SettingsList from 'react-native-settings-list';




const DetailsScreen = ({navigation}) => {
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <SettingsList>
        
          <SettingsList.Item title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
          <SettingsList.Item title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
          <SettingsList.Item title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
          <SettingsList.Item title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
     
        </SettingsList>

        

    </View>
  
    );
  };

export default DetailsScreen;