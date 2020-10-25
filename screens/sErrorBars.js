import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';


const upTrace = {
    __id: 'up',
    x: [0, 1, 2],
    y: [6, 10, 2],
    error_y: {
      type: 'data',
      array: [1, 2, 3],
      visible: true
    },
    type: 'scatter'
  };
  
  const downTrace = {
    __id: 'down',
    x: [1, 2, 3, 4],
    y: [2, 1, 3, 4],
    error_x: {
      type: 'percent',
      value: 10
    },
    type: 'scatter'
  };

const SER = ({navigation}) => {
  const [trace, setTrace] = useState(upTrace);
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(true);
  function swapData() {
    if (trace.__id === 'up') {
      setTrace(downTrace);
    } else {
      setTrace(upTrace);
    }
  }

  const update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  function reset() {
    setLoading(true);
    setResetKey(resetKey + 1);
  }
    return (
<View style={styles.container}>
      <View style={styles.buttonRow}>
        <Button onPress={swapData} title="Switch Data" />
      </View>
      <View style={styles.loadingRow}>
        <Text>{loading ? 'Loading' : 'Finished Loading'}</Text>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={[trace]}
          layout={{ title: "Linear Regression"}}
          update={update}
          onLoad={() => setLoading(false)}
          debug
          key={resetKey}
        />
      </View>
      <View style={styles.buttonRow}>
        <Button onPress={reset} title="Reload the Chart" />
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

export default SER;