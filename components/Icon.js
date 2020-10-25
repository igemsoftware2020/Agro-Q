import React, { PureComponent } from 'react';
import { Image } from 'react-native';



const vehicleIcon = (
  <Image
    source={require('../assets/vehicle.png')}
    style={{ height: 50, width: 50 }}
  />
);



  const distanceIcon = (
    <Image
      source={require('../assets/vehicle.png')}
      style={{ height: 50, width: 50 }}
    />
  );

  const phIcon = (
    <Image
      source={require('../assets/ph.png')}
      style={{ height: 50, width: 50 }}
    />
  );

const humidityIcon = (
    <Image
      source={require('../assets/humidity.png')}
      style={{ height: 50, width: 50 }}
    />
  );
const co2Icon = (
    <Image
      source={require('../assets/cloud.png')}
      style={{ height: 50, width: 50 }}
    />
  );
const waterTempIcon = (
    <Image
      source={require('../assets/water-temperature.png')}
      style={{ height: 50, width: 50 }}
    />
  );

const o2Icon = (
    <Image
      source={require('../assets/o2.png')}
      style={{ height: 50, width: 50 }}
    />
  );

const tempIcon = (
    <Image
      source={require('../assets/thermometer.png')}
      style={{ height: 50, width: 50 }}
    />
  );
  

export default class Icon extends PureComponent {
  render() {
    const { menu, vehicle, distance, options, children, ph,humidity, co2, waterTemp,o2,temp  } = this.props;

    if (vehicle) return vehicleIcon;
    if (distance) return distanceIcon;
    if (ph) return phIcon;
    if (humidity) return humidityIcon;
    if (co2) return co2Icon;
    if (waterTemp) return waterTempIcon;
    if (o2) return o2Icon;
    if (temp) return tempIcon;


    return children || null;
  }
}