import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';




const trace1 = {
    __id: 'up',
    x: ['Trial 1', 'Trial 2', 'Trial 3'],
  y: [3, 6, 4],
  name: 'Control',
  error_y: {
    type: 'data',
    array: [1, 0.5, 1.5],
    visible: true
  },
  type: 'bar'
  };
  
  const trace2 = {
    __id: 'down',
    x: ['Trial 1', 'Trial 2', 'Trial 3'],
    y: [4, 7, 3],
    name: 'Experimental',
    error_y: {
      type: 'data',
      array: [0.5, 1, 2],
      visible: true
    },
    type: 'bar'
  };

const boxPlot = ({navigation}) => {
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
          data={[trace1, trace2]}
          layout={{ barmode: 'group'}}
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

export default boxPlot;