import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';

var sensors = ['atmospheric temp', 'water temp', 'humidity', 'temperature', 'light intensity', 'ph',];

var data1 = [global.temp, global.waterTemp, global.humidity, global.temp, global.light, global.ph];

var data2 = [49.1, 42, 52.7, 84.3, 51.7, 61.1, 55.3, 64.2, 91.1, 58.9];



const trace1 = {
    __id: 'up',
    type: 'scatter',
  x: data1,
  y: sensors,
  mode: 'markers',
  name: 'Optimal Sensor Values',
  marker: {
    color: 'rgba(156, 165, 196, 0.95)',
    line: {
      color: 'rgba(156, 165, 196, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
  };
  
  const trace2 = {
    __id: 'down',
    y: sensors,
  mode: 'markers',
  name: 'system sensor values',
  marker: {
    color: 'rgba(204, 204, 204, 0.95)',
    line: {
      color: 'rgba(217, 217, 217, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
  };

const cdp = ({navigation}) => {
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(true);

  function reset() {
    setLoading(true);
    setResetKey(resetKey + 1);
  }
  
  const update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

    return (
<View style={styles.container}>


      <View style={styles.loadingRow}>
        <Text>Scroll to see Whole Graph</Text>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={[trace1, trace2]}
          layout={{title: 'Compared Sensor Values',
          xaxis: {
            showgrid: false,
            showline: true,
            linecolor: 'rgb(102, 102, 102)',
            titlefont: {
              font: {
                color: 'rgb(204, 204, 204)'
              }
            },
            tickfont: {
              font: {
                color: 'rgb(102, 102, 102)'
              }
            },
            autotick: false,
            dtick: 10,
            ticks: 'outside',
            tickcolor: 'rgb(102, 102, 102)'
          },
          margin: {
            l: 140,
            r: 40,
            b: 50,
            t: 80
          },
          legend: {
            font: {
              size: 10,
            },
            yanchor: 'middle',
            xanchor: 'right'
          },
          width: 600,
          height: 600,
          paper_bgcolor: 'rgb(254, 247, 234)',
          plot_bgcolor: 'rgb(254, 247, 234)',
          hovermode: 'closest'}}
          update={update}
          
          debug
          key={resetKey}
          
        />
      </View>
      <View style={styles.buttonRow}>
        <Button  title="Reload the Chart" 
        onPress={reset}/>
      </View>
    </View>
  
    );
  };

  const styles = StyleSheet.create({
    buttonRow: {
      flexDirection: 'row',
    },
    loadingRow: {
      flexDirection: 'row',
    },
    chartRow: {
      flex: 1,
      width: '100%',
    },
    container: {
      paddingTop: 30,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default cdp;