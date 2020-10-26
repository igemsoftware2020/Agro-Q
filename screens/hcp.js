import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import Plotly from 'react-native-plotly';

function normal() {
    var x = 0,
        y = 0,
        rds, c;
    do {
        x = Math.random() * 2 - 1;
        y = Math.random() * 2 - 1;
        rds = x * x + y * y;
    } while (rds == 0 || rds > 1);
    c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
    return x * c; // throw away extra sample y * c
}

var N = 2000,
  a = -1,
  b = 1.2;

var step = (b - a) / (N - 1);
var t = new Array(N), x = new Array(N), y = new Array(N);

for(var i = 0; i < N; i++){
  t[i] = a + step * i;
  x[i] = (Math.pow(t[i], 3)) + (0.3 * normal() );
  y[i] = (Math.pow(t[i], 6)) + (0.3 * normal() );
}



const trace1 = {
    __id: 'up',
    x: x,
  y: y,
  mode: 'markers',
  name: 'points',
  marker: {
    color: 'rgb(102,0,0)',
    size: 2,
    opacity: 0.4
  },
  type: 'scatter'
  };
  
  const trace2 = {
    __id: 'down',
    x: x,
  y: y,
  name: 'density',
  ncontours: 20,
  colorscale: 'Hot',
  reversescale: true,
  showscale: false,
  type: 'histogram2dcontour'
  };
  const trace3 = {
    __id: 'down',
    x: x,
    name: 'x density',
    marker: {color: 'rgb(102,0,0)'},
    yaxis: 'y2',
    type: 'histogram'
  };
  const trace4 = {
    __id: 'down',
    y: y,
  name: 'y density',
  marker: {color: 'rgb(102,0,0)'},
  xaxis: 'x2',
  type: 'histogram'
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
          data={[trace1, trace2, trace3, trace4]}
          layout={{
            showlegend: false,
            autosize: false,
            width: 600,
            height: 550,
            margin: {t: 50},
            hovermode: 'closest',
            bargap: 0,
            xaxis: {
              domain: [0, 0.85],
              showgrid: false,
              zeroline: false
            },
            yaxis: {
              domain: [0, 0.85],
              showgrid: false,
              zeroline: false
            },
            xaxis2: {
              domain: [0.85, 1],
              showgrid: false,
              zeroline: false
            },
            yaxis2: {
              domain: [0.85, 1],
              showgrid: false,
              zeroline: false
            }}
          }
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