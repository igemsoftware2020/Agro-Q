import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//screen imports
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

import MapScreen from "./MapScreen";
import MonitorScreen from "./MonitorScreen";
import SensorScreen from "./SensorScreen";
import ModelsScreen from "./ModelsScreen";
import waterTemperatureScreen from "./waterTemperature";
import humidity from "./humidity";
import temp from "./temperature";
import O2 from "./o2";
import Co2 from "./co2";
import ph from "./ph";
import ProfileScreen from "./profile";
import { TouchableOpacity, View } from 'react-native';
import { Avatar, shadow } from 'react-native-paper';
import { ScreenStack } from 'react-native-screens';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const SensorStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const MainTabScreen = () => ( 
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26}/>
          ),
        }}
      /> 
      <Tab.Screen
        name="Sensor"
        component={SensorStackScreen}
        options={{
          tabBarLabel: 'Sensor',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="stats-chart" color={color} size={26}/>
          ),
        }}
      />
      <Tab.Screen
        name="Monitor"
        component={MonitorScreen}
        options={{
          tabBarLabel: 'Monitor',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="barcode" color={color} size={26}/>
          ),
        }}
      />
       <Tab.Screen
        name="Models"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Models',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="analytics" color={color} size={26}/>
          ),
        }}
      />
     
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: 'Map',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <Icon name="map" color={color} size={26} />
          ),
        }}
      />
      
      
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor:"#ffff",
        shadowColor: "#fff",
        elevation:0
      },
      headerTintColor: "#333",
      headerAlign: "center",
     
      headerTitleStyle: {
        fontWeight: "bold"
      }
  
    }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title:'AgroQ',
      headerLeft: () => (
        <View style={{marginLeft:10}}>
        <Icon.Button 
        name="settings-sharp" 
        size={25} color="#333"
        backgroundColor="#fff" 
        onPress={() => {navigation.openDrawer()}}>

         </Icon.Button>
         </View>
      ),
      headerRight: () => (
        <View style={{flexDirection:"row", marginRight:10}}>
        
        <Icon.Button 
        name="notifications" 
        size={25} color="#333"
        backgroundColor="#fff" 
        onPress={() => {navigation.openDrawer()}}>

         </Icon.Button>
         
         </View>
      )

      
    }}/>
    
    
  </HomeStack.Navigator>
  
  
  );



  const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor:"#fff",
        shadowColor: "#fff",
        elevation:10
        
      },
      headerTintColor: "#333",
     
      headerTitleStyle: {
        fontWeight: "bold"
      }
  
    }}>
    <DetailsStack.Screen name="Models" component={DetailsScreen} options={{
      headerLeft: () => (
        <Icon.Button name="settings-sharp" size={25} 
        color="#333"
        backgroundColor="#fff"  onPress={() => {navigation.openDrawer()}}></Icon.Button>
      )
    }} />
  </DetailsStack.Navigator>
  
  );

  
  
  const SensorStackScreen = ({navigation}) => (
    <SensorStack.Navigator screenOptions = {{
      headerStyle:{
        backgroundColor:"#ffff",
        shadowColor: "#333",
        elevation:0
      },
      headerTintColor: "#333",
      headerAlign: "center",
     
      headerTitleStyle: {
        fontWeight: "bold"
      }
  
    }}>
    <SensorStack.Screen name="Home" component={SensorScreen} options={{
      title:'Sensors',
      headerLeft: () => (
        <View style={{marginLeft:10}}>
        <Icon.Button 
        name="settings-sharp" 
        size={25} color="#333"
        backgroundColor="#fff" 
        onPress={() => {navigation.openDrawer()}}>

         </Icon.Button>
         </View>
      ),
     

      
    }} 
    
    
    />
    
    <SensorStack.Screen
    name="Humidity Stats"
    component={humidity}
    
    />
     <SensorStack.Screen
    name="O2 Stats"
    component={O2}
    
    />
    
    <SensorStack.Screen
    name="Co2 Stats"
    component={Co2}
    
    />

     <SensorStack.Screen
    name="Water Temp Stats"
    component={waterTemperatureScreen}
    
    />
     <SensorStack.Screen
    name="Atmospheric Temperature Stats"
    component={temp}
    
    />
    
    <SensorStack.Screen
    name="PH Stats"
    component={ph}
    
    />
  </SensorStack.Navigator>
  
  );

  
  


