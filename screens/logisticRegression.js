import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';


const upTrace = {
    __id: 'up',
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    y: [8, 7, 6, 5, 4, 3, 2, 1, 0],
    type: 'scatter'
  };
  
  const downTrace = {
    __id: 'down',
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  type: 'scatter'
  };

const logisticRegression = ({navigation}) => {
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
          layout={{ xaxis: {
            type: 'log',
            autorange: true
          },
          yaxis: {
            type: 'log',
            autorange: true
          }}}
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

export default logisticRegression;