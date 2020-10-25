import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar,SafeAreaView,ScrollView, TouchableOpacity, Image } from 'react-native';


import Block from "../components/Block";
import Icon from "../components/Icon";
import Card from "../components/Card";
import Label from "../components/Label";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { LineChart, YAxis, Grid } from 'react-native-svg-charts'


import * as theme from '../constants/theme';

const SensorScreen = ({navigation}) => {
  const data = [3,2,2,1,3,3,3,2,3,2,2]
 
        const contentInset = { top: 20, bottom: 20 }
    return (
      <SafeAreaView style={styles.overview}>
      <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
        <Card row middle style={styles.margin}>
          <Block flex={1.2} center middle style={{ marginRight: 20 }}>
          <View style={styles.categoryIcon2}>
            <Ionicons name="happy" size={35} color="#013220" />
          </View>
            <Text ligth caption center style={{ paddingHorizontal: 0, marginTop: 3 }}>
              System Health
            </Text>
          </Block>
          <Block>
            <Text paragraph color="black3">
              The System is Working well. If you want to have a closer look click the sensors below
            </Text>
          </Block>
        </Card>
     
        <Card
          title="OVERALL HEALTH"
          style={[styles.margin, { marginTop: 18 }]}
        >
          <Block row right>
            <Block flex={2} row center right>
              <Label purple />
              <Text paragraph color="gray">Health</Text>
            </Block>
          </Block>
          <Block>
            <Text>Chart</Text>
            <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={5}
                    
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
          </Block>
        </Card>

        <View>
        <Text
          style={{
            paddingTop: 20,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Sensors
        </Text>
        </View>



        <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >

     
        <TouchableOpacity
        onPress={() => navigation.navigate('PH Stats')}>
          <Card middle style={{  marginLeft:10}}>
            <Icon ph/>
            <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold', }}>PH</Text>
            <Text paragraph color="gray">scale of 1 - 14      </Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('Humidity Stats')}
         >
          <Card middle style={{  marginLeft: 7}}>
            <Icon humidity />
            <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Humidity</Text>
            <Text paragraph color="gray">Outdoor Humidity</Text>
          </Card>
          </TouchableOpacity>
       
          <TouchableOpacity
           onPress={() => navigation.navigate('Co2 Stats')}
          
          >
          <Card middle style={{ marginLeft: 7 }}>
            <Icon co2/>
            <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>co2</Text>
            <Text paragraph color="gray">Carbon Dioxide </Text>
          </Card>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={() => navigation.navigate('Water Temp Stats')}>
          <Card middle style={{ marginLeft: 7 }}>
            <Icon waterTemp />
            <Text h2 style={{marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Water Temp</Text>
            <Text paragraph color="gray">In Farenheit </Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => navigation.navigate('Atmospheric Temperature Stats')}>
          <Card middle style={{ marginLeft: 7 }}>
            <Icon temp/>
            <Text h2 style={{marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>Outside Temp</Text>
            <Text paragraph color="gray">In Farenheit  </Text>
          </Card>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('O2 Stats')}>
          <Card middle style={{ marginLeft: 7 }}>
            <Icon o2 />
            <Text h2 style={{ marginTop: 17,fontSize: 18,fontWeight: 'bold',}}>o2</Text>
            <Text paragraph color="gray">Dissolved Oxygen</Text>
          </Card>
          </TouchableOpacity>
    
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  
    );
  };

export default SensorScreen;

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
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
  chipsScrollView: {
    paddingTop:15,
    paddingHorizontal:10,
  },
});