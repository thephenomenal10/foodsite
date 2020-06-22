var db = firebase.firestore();
var earning = document.getElementById("earning");

db.collection("earning").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data().total_earning + "\n");
    });
});


/*
/* Auth code 

var notLoggedIn = document.getElementById("notLoggedIn");
var loggedIn = document.getElementById("loggedIn");

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        notLoggedIn.style.display = "none";
        loggedIn.style.display = "block";
    } else {
        notLoggedIn.style.display = "block";
        loggedIn.style.display = "none";
    }
});

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
    });
}

function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = "http://127.0.0.1:5500/index.html"
    })
    .catch(function(error) {
        window.alert("Error:" + error);
    });
}

*/