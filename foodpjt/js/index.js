const db = firebase.firestore();


function sliderUpdate() {
    
    var imageNumber = document.getElementById("imageNumber").value;

    var image = document.getElementById("image").files[0];
    var imageName = image.name;
    
    var storageRef = firebase.storage().ref('sliderImages/' + imageName);
    
    var uploadTask = storageRef.put(image);
    

    uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log("Upload is " + progress + "% done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            var url = downloadURL;

            db.collection("sample").doc().set({
                imageNumber: imageNumber,
                image: url
            })
            .then(function(){
                window.alert("Upload successful");
            })
            .catch(err => window.alert("Error: " + err.message));
        });
    });
}


function onboardingUpdate() {
    var screenNumber = document.getElementById("screenNumber").value;
    var description = document.getElementById("description").value;
    var heading = document.getElementById("heading").value;
    var onboardingImage = document.getElementById("onboardingImage").files[0];
    var onboardingImageName = onboardingImage.name;

    var storageRef = firebase.storage().ref('onboardingImages/' + onboardingImageName);
    
    var uploadTask = storageRef.put(onboardingImage);
    

    uploadTask.on('state_changed', function(snapshot) {
    var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;

    console.log("Upload is " + progress + "% done");
    },function(error){
        console.log(error.message);
    },function(){
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
            var url = downloadURL;

            db.collection("sample").doc().set({
                screenNumber: screenNumber,
                description: description,
                heading: heading,
                onboardingImage: url
            })
            .then(function(){
                window.alert("Upload successful");
            })
            .catch(err => window.alert("Error: " + err.message));
        });
    });
}



/*
var earning = document.getElementById("earning");

db.collection("earning").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data().total_earning + "\n");
    });
});


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