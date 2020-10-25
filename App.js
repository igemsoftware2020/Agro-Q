/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { NavigationContainer, DarkTheme} from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import ProfileScreen from './screens/profile';
import onboarding from './screens/onboarding';
import login from './screens/loginScreen';
import LoginScreen from './screens/loginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';
import Onboarding from 'react-native-onboarding-swiper';
import linearRegression from './screens/linearRegression';
import BoxPlot from './screens/BoxPlot';
import logisticRegression from './screens/logisticRegression';
import SER from './screens/sErrorBars';



//<script src="http://localhost:8097"></script>



//import ThemeManager, { useTheme } from './themes'
//import { Switch } from 'react-native'
//Amplify.Logger.LOG_LEVEL = 'DEBUG'

const Drawer = createDrawerNavigator()



const App = () => {


 
    return(
      <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
       <Drawer.Screen name="Home" component={MainTabScreen} />
       <Drawer.Screen name="ProfileScreen" component={onboarding} />
       <Drawer.Screen name="Login" component={login} />
       <Drawer.Screen name="linearRegression" component={linearRegression} />
       <Drawer.Screen name="BoxPlot" component={BoxPlot} />
       <Drawer.Screen name="logisticRegression" component={logisticRegression} />
       <Drawer.Screen name="SymmetricErrorBars" component={SER} />
       
     </Drawer.Navigator>

   
     
   </NavigationContainer>


    );

  


}

export default (App);
