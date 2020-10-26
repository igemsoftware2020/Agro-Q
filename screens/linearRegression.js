import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';


const trace1 = {
    __id: 'up',
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    mode: 'markers',
    name: 'Sensor-health'
  
  };
  
  const trace2 = {
    __id: 'down',
    x: [1, 2, 3, 4],
  y: [9, 13,17 ,21],
  mode: 'lines',
  name: 'Predicted'
  };

const linearRegression = ({navigation}) => {
  
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(true);
  

  const update = (_, { data, layout, config }, plotly) => {
    plotly.react(data, layout, config);
  };

  function reset() {
    setLoading(true);
    setResetKey(resetKey + 1);
  }
    return (
<View style={styles.container}>
      
      <View style={styles.loadingRow}>
        <Text>{loading ? 'Loading' : 'Finished Loading'}</Text>
      </View>
      <View style={styles.chartRow}>
        <Plotly
          data={[trace1, trace2]}
          layout={{ title: "Health vs Sensor Values"}}
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

export default linearRegression;