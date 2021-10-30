import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';



const trace1 = {
    __id: 'up',
    type: "pointcloud",
    mode: "markers",
    marker: {
      sizemin: 0.5,
      sizemax: 100,
      arearatio: 0,
      color: "rgba(255, 0, 0, 0.6)"
    },
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    y: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  };
  
  const trace2 = {
    __id: 'down',
    type: "pointcloud",
  mode: "markers",
  marker: {
    sizemin: 0.5,
    sizemax: 100,
    arearatio: 0,
    color: "rgba(0, 0, 255, 0.9)",
    opacity: 0.8,
    blend: true
  },
  opacity: 0.7,
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  };
  const trace3 = {
    __id: 'down',
    type: "pointcloud",
    mode: "markers",
    marker: {
      sizemin: 0.5,
      sizemax: 100,
      border: {
        color: "rgb(0, 0, 0)",
        arearatio: 0.7071
      },
      color: "green",
      opacity: 0.8,
      blend: true
    },
    opacity: 0.7,
    x: [3, 4.5, 6],
    y: [9, 9, 9]
  };
const pointcloud = ({navigation}) => {
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
        <Text>{loading ? 'Loading' : 'Finished Loading'}</Text>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={[trace1, trace2,trace3]}
          layout={{title: "Basic Point Cloud",
          xaxis: {
            type: "linear",
            range: [
              -2.501411175139456,
              43.340777299865266],
            autorange: true
          },
          yaxis: {
            type: "linear",
            range: [4,6],
            autorange: true
          },
          height: 598,
          width: 1080,
          autosize: true,
          showlegend: false}}
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

export default pointcloud;