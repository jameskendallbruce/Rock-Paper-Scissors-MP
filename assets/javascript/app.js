// always start with a ready function
$( document ).ready(function() {

    // adding in our firebase
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC1cDHsiWsCpaGnBq0HUGM8KLr1oJK8Hwc",
        authDomain: "rock-paper-scissors-dd4db.firebaseapp.com",
        databaseURL: "https://rock-paper-scissors-dd4db.firebaseio.com",
        projectId: "rock-paper-scissors-dd4db",
        storageBucket: "rock-paper-scissors-dd4db.appspot.com",
        messagingSenderId: "398563851257"
    };
    
    firebase.initializeApp(config);

    // variable to access firebase easily

    var database = firebase.database();

    var player1 = database.ref("/Player-1");

    var player2 = database.ref("/Player-2");

    console.log(player1);

    console.log(player2);











// end of ready function
})