

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

* [Background](#Backround)
* [Overview](#Overview)
  * [Screens](#Screens)
  * [DataFlow](#DataFLow)
* [Hardware](#Hardware)
* [Contanct](#Contact)





<!-- ABOUT THE PROJECT -->
## Backround


  <a href="#">
    <img src="https://cdn.discordapp.com/attachments/769754881414004741/769755050637262848/agroLogo.png" alt="Logo" width="80" height="80">
  </a>

Why this app was made

Goals of app:
* Goals of the app

* 2nd goal of the app

* 3rd goal of the app


<!-- GETTING STARTED -->
## Overview

The Agro-Q mobile app has a wide variety of features that allow users to maintain their hydroponics system. Users can view the sensor data, such as pH, water temperature, CO2, atmospheric temperature, and light intensity, via the app, and create models for predicting plant growth. The app periodically takes a picture of the plants in the system to monitor plant health by using an algorithm that corresponds plant color to certain levels of growth. The Agro-Q app allows collaboration among the user by sharing their specific hydroponics setups. 



### Screens


#screenshots


Screens Descriptions:
* Here is the description of the first screen
* Here is the description of the first screen
* Here is the description of the first screen
* Here is the description of the first screen
* Here is the description of the first screen




<!-- USAGE EXAMPLES -->
### DataFlow

Once the data is collected from the sensors, the data is sent to the Raspberry Pi using a serial connection. Using the Raspberry Pi’s internet connection, the data is then sent to the Firebase Cloud Server to be stored in a non-sql database. The data is then read from the database and displayed in the Agro-Q app for users to monitor their hydroponics system.

#diagram of Dataflow

#code for rasberi pi webserver




<!-- CONTACT -->
## Hardware Setup
The Sensor System contains seven sensors that work in conjunction to help monitor plant health and system’s conditions. The first Sensor is the DHT11 Temperature and Humidity sensor, which  will be placed outside the system to  maximize plant growth using automated responses. The second Sensor will be the CO2  Sensor. This sensor will track the amount of CO2  in the atmosphere in 5-10 min intervals as CO2 vital for plant photosynthesis . The 3rd sensor group, Photoresistors, will determine the amount of light the plants will be exposed to then preventing the growth of algae. The water temperature probe is used to measure the water temperature within the system for optimal plant growth. If the pH levels are outside of the optimum range, the plants will lose the ability to absorb essential elements required for steady growth, so pH is also measured using the pH sensor to determine if the pH of the water is outside of the bounds of what the plant can handle. Dissolved oxygen sensors will be used to measure the nutrient solutions content since O2 levels  can influence the bacteria’s ability to regulate nutrient uptake and fight pathogens. Finally, the atmospheric o2 Sensor will be vital in making sure that the plants are getting the necessary amount of oxygen to stay healthy.





<!-- ACKNOWLEDGEMENTS -->
## Contact
Lambert Highschool -(https://twitter.com/your_username) 


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[firebase]: https://camo.githubusercontent.com/2d891f78cbe8e96dbff64e86fa29ab801c2ebe90/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436c6f75642d46697265626173652d6635626132333f6c6f676f3d4669726562617365
[firebase-url]:https://rnfirebase.io/
