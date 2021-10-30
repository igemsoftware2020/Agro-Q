"use strict";
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig= {
    apiKey: "AIzaSyC8QpdR3EXSLip4o03td9G4BqX8KpRXz6Y",
    authDomain: "agroq-d66b7.firebaseapp.com",
    databaseURL: "https://agroq-d66b7.firebaseio.com",
    projectId: "agroq-d66b7",
    storageBucket: "agroq-d66b7.appspot.com",
    messagingSenderId: "582267081238",
    appId: "1:582267081238:web:52d0e2abc5c73ebe8d1b37",
    measurementId: "G-D0ZH6Z9PSF"
  };
  // var serviceAccount = require("./firebase_key.json");

 
  // Initialize Firebase
var fb = null;
if (! firebase.apps.length)
    fb = firebase.initializeApp(firebaseConfig);
else
  fb = firebase.app();
class DBInteraction {
   async getCurrentData(systemName) {
       
        //   fb.firestore.setLogLevel('debug');

            var coll =fb.firestore().collection('hydroSystem');
            var ref = coll.doc('lambert');
            var data= await  ref.get();
            var finalData = data.data();
            return finalData;
            // var docRef = firebase_config_1.default.collection('historySystem').doc(systemName);
            // var docData = docRef.get();
            // return  docData.data();
       
    }
    getHistoricalData(systemName) {
        return __awaiter(this, void 0, void 0, function* () {
            // var docRef:firebasedb.Reference = db.ref("hydroSystem/lambert");
            var docRef = fb.collection('historySystem').doc(systemName);
            // Attach an asynchronous callback to read the data at our posts reference
            var lst = yield docRef.listCollections();
            let arData = [];
            for (let dt of lst) {
                var subColl = yield dt.get();
                subColl.docs.forEach(doc => arData.push(doc.data()));
            }
            return arData;
        });
    }
}
exports.DBInteraction = DBInteraction;
//# sourceMappingURL=dbCode.js.map