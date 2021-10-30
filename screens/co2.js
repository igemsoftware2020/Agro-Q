import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, StatusBar,SafeAreaView,ScrollView, TouchableOpacity, Image } from 'react-native';


import Block from "../components/Block";
import Icon from "../components/Icon";
import Card from "../components/Card";
import Label from "../components/Label";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DataTable } from 'react-native-paper';




import { LineChart, YAxis, Grid } from 'react-native-svg-charts'


import * as theme from '../constants/theme';
import SegmentedControlTab from "react-native-segmented-control-tab";

class Co2Screen extends Component {
	
  constructor() {
 super();
 this.state = {
     selectedIndex: 0
 }
   }
 
  handleIndexChange = index => {
  this.setState({
     ...this.state,
     selectedIndex: index
 });
    }

  render () {
    const co2History = [1522,1493,1486];
        const co2historyLatest = [];
        var i;
        
        for (i = 0; i < 5; i++) {
         var x = Math.random(-10,10);
         x = x*10;
         console.log(x);
         x = global.co2 + x;
         x = Math.round(x);
         co2historyLatest.push(x);
         console.log(x);
         console.log(co2historyLatest);

         
        } 
        var time = global.time.toString();
      var Time =  'FirestoreTimestamp';
      var latestco2 = global.co2;
      global.co2data = [latestco2,co2historyLatest[5],co2historyLatest[4],co2historyLatest[3],co2historyLatest[2],co2historyLatest[1],co2History[1],co2History[0]];
 
        const contentInset = { top: 20, bottom: 20 }
 return (
   
   <View style={styles.overview}>
     <SegmentedControlTab 
       values	           = { ["Recent Data", "Graph"] }
       selectedIndex	   = { this.state.selectedIndex }
       onTabPress        = { this.handleIndexChange }
       activeTabStyle={styles.activeTabStyle}
       tabStyle={styles.tabStyle}
     />
       {
     this.state.selectedIndex === 0 ? 
     
     <SafeAreaView style={styles.overview}>
      <ScrollView contentContainerStyle={{ alignContent:"center" }}>
        
     
        <Card
          title="Data Table"
          style={[styles.margin, { marginTop: 25 }]}
        >
          
          <Block>
          <DataTable>
    <DataTable.Header>
      <DataTable.Title numeric>Reading Date/Time</DataTable.Title>
      <DataTable.Title numeric>Humidity</DataTable.Title>
     
    </DataTable.Header>

    <DataTable.Row>
       <DataTable.Cell numeric>{time}</DataTable.Cell>
      
       <DataTable.Cell numeric>{global.co2}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{Time} </DataTable.Cell>
     
       <DataTable.Cell numeric>{co2historyLatest[0]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell numeric>{Time}</DataTable.Cell>
      
      <DataTable.Cell numeric>{co2historyLatest[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{Time}</DataTable.Cell>
     
      <DataTable.Cell numeric>{co2History[2]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell numeric>{Time}</DataTable.Cell>
      
      <DataTable.Cell numeric>{co2History[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{Time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{co2History[0]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Pagination
      page={1}
      numberOfPages={3}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
            
          </Block>
        </Card>

       


        
      </ScrollView>
    </SafeAreaView>
           
           :

           <SafeAreaView style={styles.overview}>
           <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
             
             <Card
               title="Co2 over 3 days"
               style={[styles.margin, { marginTop:"15%"}]}
             >
               <Block row right>
                 <Block flex={2} row center right>
                   <Label purple />
                   <Text paragraph color="gray">Co2</Text>
                 </Block>
               </Block>
               <Block>
                 <Text>Chart</Text>
                 <View style={{ height: 200, flexDirection: 'row' }}>
                     <YAxis
                         data={global.co2data}
                         contentInset={contentInset}
                         svg={{
                             fill: 'grey',
                             fontSize: 10,
                         }}
                         numberOfTicks={5}
                         
                     />
                     <LineChart
                         style={{ flex: 1, marginLeft: 16 }}
                         data={global.co2data}
                         svg={{ stroke: 'rgb(134, 65, 244)' }}
                         contentInset={contentInset}
                     >
                         <Grid />
                     </LineChart>
                 </View>
               </Block>
             </Card>
     
    
     
     
     
           </ScrollView>
         </SafeAreaView>
       }
        </View>
 )
   }
}

const styles = StyleSheet.create({

  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  tabStyle:{
    borderColor:"#009387",
    color:"#009387"

  },
  activeTabStyle: {
    backgroundColor: "#009387"
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

export default Co2Screen;