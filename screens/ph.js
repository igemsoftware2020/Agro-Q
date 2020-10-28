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

class PhScreen extends Component {
	
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
    //const data = [global.ph,4.5,4.0,4.0,4.1,5.0]
 
        const contentInset = { top: 20, bottom: 20 }
        const phHistory = [5.0,4.8,5.0];
        const phhistoryLatest = [];
        var i;
        
        for (i = 0; i < 5; i++) {
         var x = Math.random(-.2,.2);
         x = global.ph + x;
         x = Math.max(Math.round(x * 10) / 10);
         phhistoryLatest.push(x);
         console.log(x);
         console.log(phhistoryLatest);

         
        } 
        var time = global.time.toString();
      var Time =  'FirestoreTimestamp';
      var latestPH = global.ph;
      global.phdata = [latestPH,phhistoryLatest[5],phhistoryLatest[4],phhistoryLatest[3],phhistoryLatest[2],phhistoryLatest[1],phHistory[1],phHistory[0]];
    
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
       <DataTable.Title numeric>ph</DataTable.Title>
     
    </DataTable.Header>

    <DataTable.Row>
       <DataTable.Cell >{time}</DataTable.Cell>
      {/*latest data */ }
       <DataTable.Cell numeric>{global.ph}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
       <DataTable.Cell>{Time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{phhistoryLatest[0]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell numeric>{Time}</DataTable.Cell>
      
       <DataTable.Cell numeric>{phhistoryLatest[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{Time}</DataTable.Cell>
     
      <DataTable.Cell numeric>{phHistory[2]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
       <DataTable.Cell> {Time}</DataTable.Cell>
      
      <DataTable.Cell numeric>{phHistory[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{Time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{phHistory[0]}</DataTable.Cell>
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
               title="PH over 3 days"
               style={[styles.margin, { marginTop:"15%"}]}
             >
               <Block row right>
                 <Block flex={2} row center right>
                   <Label purple />
                   <Text paragraph color="gray">PH</Text>
                 </Block>
               </Block>
               <Block>
                 <Text>Chart</Text>
                 <View style={{ height: 200, flexDirection: 'row' }}>
                     <YAxis
                         data={global.phdata}
                         contentInset={contentInset}
                         svg={{
                             fill: 'grey',
                             fontSize: 10,
                         }}
                         numberOfTicks={5}
                         
                     />
                     <LineChart
                         style={{ flex: 1, marginLeft: 16 }}
                         data={global.phdata}
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

export default PhScreen;