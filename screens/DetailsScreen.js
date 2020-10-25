import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SettingsList from 'react-native-settings-list';




const DetailsScreen = ({navigation}) => {
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <SettingsList>
        
    
          <SettingsList.Item 
          onPress={() => navigation.navigate('linearRegression')}
          title='Linear Regression '/>

          <SettingsList.Item 
          onPress={() => navigation.navigate('SymmetricErrorBars')}
          title='Symmetric Error Bars'/>
          <SettingsList.Item 
          onPress={() => navigation.navigate('BoxPlot')}
          title='Box Plot'/>
          <SettingsList.Item 
          onPress={() => navigation.navigate('logisticRegression')}
          title='Logistic Regression'/>
          <SettingsList.Item
           
          title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
          <SettingsList.Item title='Linear Regression '/>
          <SettingsList.Item title='Logistic Regression'/>
     
        </SettingsList>

        

    </View>
  
    );
  };

export default DetailsScreen;