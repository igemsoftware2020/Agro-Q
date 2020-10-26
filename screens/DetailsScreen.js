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
          onPress={() => navigation.navigate('2dHCP')}
          title='2d Countour Plot '/>
          <SettingsList.Item 
          onPress={() => navigation.navigate("cdp")}
          title='Catagorical Dot Plot'/>
          <SettingsList.Item onPress={() => navigation.navigate("spc")} title='SPC Control Chart'/>
          <SettingsList.Item onPress={() => navigation.navigate("pointCloud")} title='Point Cloud'/>
     
        </SettingsList>

        

    </View>
  
    );
  };

export default DetailsScreen;