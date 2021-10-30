const Images = [
  
    {image: require("../assets/map1.jpg")},
    {image: require("../assets/map2.jpg")},
    {image: require("../assets/map3.jpg")},
    {image: require("../assets/map4.jpg")},
  
  
];








 
export const markers = [
    

    {
        
        coordinate: {
        latitude: 34.105793,
        longitude: -84.137916,
        },
        title: "Lambert Highschool",
        description: "Hydroponics System of Lambert iGEM",
        image: Images[0].image,

        
    },
    {
        coordinate: {
            latitude: 34.102680,
            longitude: -84.135540,
        },
        title: "Test Location 2",
        description: "Test Location to show proof of concept. Real locations will be added with the realse of the app on the app store",
        image: Images[1].image,

        
    },
    {
        coordinate: {
            latitude: 34.148479,
        longitude: -84.171593,
        },
        title: "Test Location 3",
        description: "Test Location to show proof of concept. Real locations will be added with the realse of the app on the app store",
        image: Images[2].image,

        
    },
    {
        coordinate: {
            latitude: 34.072950,
        longitude: -84.124130,
        },
        title: "Location 4",
        description: "Test Location to show proof of concept. Real locations will be added with the realse of the app on the app store",
        image: Images[3].image,

        
    },
];


export const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        stylers: [
            {
                "visibility":"off"
            }
        ]
    }



];


