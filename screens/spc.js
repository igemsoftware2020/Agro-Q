import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';

var Data = {
  type: 'scatter',
  x: [1,2,3,4,5,6,7,8,9],
  y: [4,2,-1,4,-5,-7,0,3,8],
  mode: 'lines+markers',
  name: 'Data',
  showlegend: true,
  hoverinfo: 'all',
  line: {
    color: 'blue',
    width: 2
  },
  marker: {
    color: 'blue',
    size: 8,
    symbol: 'circle'
  }
}

var Viol = {
  type: 'scatter',
  x: [6,9],
  y: [-7,8],
  mode: 'markers',
  name: 'Violation',
  showlegend: true,
  marker: {
    color: 'rgb(255,65,54)',
    line: {width: 3},
    opacity: 0.5,
    size: 12,
    symbol: 'circle-open'
  }
}

var CL = {
  type: 'scatter',
  x: [0.5, 10, null, 0.5, 10],
  y: [-5, -5, null, 5, 5],
  mode: 'lines',
  name: 'limits',
  showlegend: true,
  line: {
    color: 'red',
    width: 2,
    dash: 'dash'
  }
}

var Centre = {
  type: 'scatter',
  x: [0.5, 10],
  y: [0, 0],
  mode: 'lines',
  name: 'baseline',
  showlegend: true,
  line: {
    color: 'grey',
    width: 2
  }
}


const spc = ({navigation}) => {
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
          data={[Data,Viol,CL,Centre]}
          layout={{ title: 'Sysem Health',
          xaxis: {
            zeroline: false
          },
          yaxis: {
            range: [-10,10],
            zeroline: false
          }}}
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

export default spc;