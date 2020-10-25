const Images = [
  
    {image: require("../assets/map1.jpg")},
    {image: require("../assets/map2.jpg")},
    {image: require("../assets/map3.jpg")},
    {image: require("../assets/map4.jpg")},
  
  
];

export const markers = [
    {
        coordinate: {
        latitude: 22.6293867,
        longitude: 88.4354486,
        },
        title: "Test1",
        description: "this is a random description that goes here",
        image: Images[0].image,

        
    },
    {
        coordinate: {
            latitude: 22.6345648,
            longitude: 88.4377279,
        },
        title: "Test2",
        description: "this is a random description that goes here",
        image: Images[1].image,

        
    },
    {
        coordinate: {
            latitude: 22.6281662,
        longitude: 88.4410113,
        },
        title: "Test3",
        description: "this is a random description that goes here",
        image: Images[2].image,

        
    },
    {
        coordinate: {
            latitude: 22.6292757,
        longitude: 88.444781,
        },
        title: "Test4",
        description: "this is a random description that goes here",
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


