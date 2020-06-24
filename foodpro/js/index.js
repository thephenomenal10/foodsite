const db = firebase.firestore();

//Auth code 

var notLoggedIn = document.getElementById("notLoggedIn");
var loggedIn = document.getElementById("loggedIn");

firebase.auth().onAuthStateChanged(function(user) {
    if(user) {
        //notLoggedIn.style.display = "none";
        //loggedIn.style.display = "block";
        window.location.replace("./public/dashboard.html");
       
    } else {
        //notLoggedIn.style.display = "block";
        //loggedIn.style.display = "none";
        window.location.replace("index.html");
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

var totalearning = 0;
var total =0;
var orders=0;
var vendors =0;
var users = 0;
var vendor=0;
   
   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
        totalearning += doc.data().totalCost;
        });
       earning.innerHTML += "<h3>" + totalearning + "</h3>";
    });


  
    db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
    });

    
    
    db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            vendors ++;
        });
        totalvendors.innerHTML += "<h3>" + vendors + "</h3>";
    });


   db.collection("customer_collection").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            users++;
         });
         totalusers.innerHTML += "<h3>" + users + "</h3>";
   });

   db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            orders++;
          });
        totalorders.innerHTML += "<h3>" + orders + "</h3>";
    });
    
    db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
         querySnapshot.forEach(function(doc){
           vendor ++;
        });
         totalvendor.innerHTML += "<h3>" + vendor + "</h3>";
    });
