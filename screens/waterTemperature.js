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

class waterTempScreen extends Component {
	
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
    const wtempHistory = [18,19,18];
    const wtemphistoryLatest = [];
    var i;
    
    for (i = 0; i < 5; i++) {
     var x = Math.random(-1,2);
     x = x*10;
     console.log(x);
     x = global.waterTemp + x;
     x = Math.round(x);
     wtemphistoryLatest.push(x);
     console.log(x);
     console.log(wtemphistoryLatest);

     
    } 
    var time = global.time.toString();
  //var Time =  'FirestoreTimestamp';
  var wlatesttemp = global.waterTemp;
  global.waterdata = [wtemphistoryLatest[0],wtemphistoryLatest[5],wtemphistoryLatest[4],wtemphistoryLatest[3],wtemphistoryLatest[2],wtemphistoryLatest[1],wtempHistory[1],wtempHistory[0]];
 
 
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
      <DataTable.Title numeric>Water Temp</DataTable.Title>
     
    </DataTable.Header>

    <DataTable.Row>
       <DataTable.Cell numeric>{time}</DataTable.Cell>
      
       <DataTable.Cell numeric>{global.waterTemp}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{wtemphistoryLatest[2]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell numeric>{time}</DataTable.Cell>
      
       <DataTable.Cell numeric>{wtemphistoryLatest[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{wtempHistory[2]}</DataTable.Cell>
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell numeric>{time}</DataTable.Cell>
      
       <DataTable.Cell numeric>{wtempHistory[1]}</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>{time}</DataTable.Cell>
     
       <DataTable.Cell numeric>{wtempHistory[0]}</DataTable.Cell>
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
               title="Water Temperature over 3 days"
               style={[styles.margin, { marginTop:"15%"}]}
             >
               <Block row right>
                 <Block flex={2} row center right>
                   <Label purple />
                   <Text paragraph color="gray">Water Temp</Text>
                 </Block>
               </Block>
               <Block>
                 <Text>Chart</Text>
                 <View style={{ height: 200, flexDirection: 'row' }}>
                     <YAxis
                         data={global.waterdata}
                         contentInset={contentInset}
                         svg={{
                             fill: 'grey',
                             fontSize: 10,
                         }}
                         numberOfTicks={5}
                         
                     />
                     <LineChart
                         style={{ flex: 1, marginLeft: 16 }}
                         data={global.waterdata}
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

export default waterTempScreen;