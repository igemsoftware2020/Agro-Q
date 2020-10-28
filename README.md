

[![Firebase][Firebase]][firebase-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="#">
    <img src="https://cdn.discordapp.com/attachments/769754881414004741/769755050637262848/agroLogo.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Agro-Q</h3>

  <p align="center">
    Revolutionizing the Future of Hydroponics
    <br />
    
  </p>
</p>





<!-- TABLE OF CONTENTS -->
## Table of Contents


* [Overview](#Overview)
  * [Screens](#Screens)
  * [DataFlow](#DataFLow)
* [Setup and Run](#SetupandRun)
* [Contanct](#Contact)





<!-- ABOUT THE PROJECT -->



  <a href="#">
    <img src="https://cdn.discordapp.com/attachments/769754881414004741/769755050637262848/agroLogo.png" alt="Logo" width="80" height="80">
  </a>


## Overview

The Agro-Q mobile app has a wide variety of features that allow users to maintain their hydroponics system. Users can view sensor data of pH, water temperature, CO2, atmospheric temperature, and light intensity, via the app, and analyze the plant growth. The Agro-Q app allows collaboration among the user by sharing their specific hydroponics setups through the google maps in the app.



### Screens


#screenshots



Screens Descriptions:

<br>
<a href="#">
    <img src="https://2020.igem.org/wiki/images/5/58/T--Lambert_GA--Agro1.png" alt="appscreen1" width="10%" height="10%">
  </a>
 <br>


<br>
<a href="#">
    <img src=' https://2020.igem.org/wiki/images/a/a2/T--Lambert_GA--home.png' alt="appscreen2" width="10%" height="10%">
  </a>
  <br>


<br>
<a href="#">
    <img src=' https://2020.igem.org/wiki/images/e/e0/T--Lambert_GA--Agro3.png' alt="appscreen3" width="10%" height="10%">
  </a>

  <br>


<br>
 <a href="#">
    <img src='https://2020.igem.org/wiki/images/3/3e/T--Lambert_GA--Agro5.png' alt="appscreen4" width="10%" height="10%">
  </a>
  <br>



<br>
 <a href="#">
    <img src='https://2020.igem.org/wiki/images/1/15/T--Lambert_GA--Agro6.png' alt="appscreen5" width="10%" height="10%">
  </a>

  <br>



<br>
<a href="#">
    <img src=' https://2020.igem.org/wiki/images/e/e0/T--Lambert_GA--Agro7.png' alt="appscreen6" width="10%" height="10%">
  </a>

  <br>



<br>
<a href="#">
    <img src='https://2020.igem.org/wiki/images/7/7e/T--Lambert_GA--Agro9.png' alt="appscreen7" width="10%" height="10%">
  </a>

<br>





<!-- USAGE EXAMPLES -->
### DataFlow

Once the data is collected from the sensors, the data is sent to the Raspberry Pi using a serial connection. Using the Raspberry Pi’s internet connection, the data is then sent to the Firebase Cloud Server to be stored in a non-sql database. The data is then read from the database and displayed in the Agro-Q app for users to monitor their hydroponics system.



<a href="#">
    <img src='https://2020.igem.org/wiki/images/e/e6/T--Lambert_GA--SensorFlowChart.png' alt="dataflow" width="50%" height="50%">
  </a>




<!-- CONTACT -->


## Installation

Download the project files to your computer

### Mac - Android or iOS
1. Open Terminal and navigate to the project folder
1. To run the app on the iOS Simulator, Xcode must be installed with a valid signing profile. Enter the following command in the terminal: 
```
npx react-native run-ios
```

Run the app on the iOS Simulator by opening the .xcworkspace file and clicking the play button at the top of the screen. To run on a physical iOS device, plug the device into the Mac and choose the device from the dropdown menu at the top of the screen.


To run on an Android simulator, simply use the following command or open Android Studio and run the app manually.
```
npx react-native run-android
```

### Windows - Android
1. To run the app on the Android simulator, open a command prompt window and navigate to the project folder
2. Run the following command: 
```
npx react-native run-android
```
To run on a physical Android device, plug in the device into the computer and use Android Studio to manually run the app onto the device.


Note to user: 
- app currently optimized for android
- Data uploads to the app between 5sec -1min 
- Sometimes data may not update properly so restart the app and run again

Login info for test account: (create user will be created in future version)
- Username : lamberttest@gamil.com
- Password : lambert123


## Testing
Download the code from this repository to run a node js server to update values on the app:
https://github.com/VarunSendilraj/testingagro-q/tree/main 

### Run
1. Open Terminal and navigate to the project folder
1. To run the server, enter the following command in the terminal: 
```
npm install
```
To start the server run the following command in the terminal:
```
npm start
```

To update the data values type the values in the following link 
```
http://localhost:3000/sendData/temp,Ph,light,co2,waterTemp,humidity

```



<!-- ACKNOWLEDGEMENTS -->
## Contact
Lambert Highschool


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[firebase]: https://camo.githubusercontent.com/2d891f78cbe8e96dbff64e86fa29ab801c2ebe90/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436c6f75642d46697265626173652d6635626132333f6c6f676f3d4669726562617365
[firebase-url]:https://rnfirebase.io/
[app1]:  https://2020.igem.org/wiki/images/5/58/T--Lambert_GA--Agro1.png
[app2]: https://2020.igem.org/wiki/images/a/a2/T--Lambert_GA--home.png
[app3]: https://2020.igem.org/wiki/images/e/e0/T--Lambert_GA--Agro3.png
[app4]: https://2020.igem.org/wiki/images/3/3e/T--Lambert_GA--Agro5.png
[app5]: https://2020.igem.org/wiki/images/1/15/T--Lambert_GA--Agro6.png
[app6]:https://2020.igem.org/wiki/images/2/22/T--Lambert_GA--ScanAPp.png
[app7]: https://2020.igem.org/wiki/images/e/e0/T--Lambert_GA--Agro7.png
[app8]:https://2020.igem.org/wiki/images/7/7e/T--Lambert_GA--Agro9.png
