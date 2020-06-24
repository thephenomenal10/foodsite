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

            db.collection("home_slider_images").doc(imageNumber).
            update({
                image: url,
            })
            .then(function(){
                window.alert("Update successful");
            })
            .catch(err => window.alert("Error: " + err.message));
        });
    });
    setTimeout(() => {location.reload();}, 3000);
}


function onboardingUpdate() {
    var screenNumber = document.getElementById("screenNumber").value;
    var smallerScreen = screenNumber.toLowerCase();
    var description = document.getElementById("description").value;
    var heading = document.getElementById("heading").value;

    var existingDescription = "";
    var existingHeading = "";
    
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

            db.collection("onboarding_images").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc){
                    if(doc.data().screenNumber === smallerScreen ){
                        existingHeading = doc.data().heading;
                        existingDescription = doc.data().description;
                        var newHeading = "";
                        var newDescription = "";

                        if(heading == ""){
                            newHeading = existingHeading;
                        } else {
                            newHeading = heading;
                        }
                    
                        console.log(newHeading);
                    
                        if(description == ""){
                            newDescription = existingDescription;
                        } else {
                            newDescription = description;
                        }
                    
                        db.collection("onboarding_images").doc(screenNumber).update({
                            heading: newHeading,
                            description: newDescription,
                            onboardingImage: url
                        })
                        .then(function(){
                            window.alert("Update successful");
                        })
                        .catch(err => window.alert("Error: " + err.message));
                    }
                });
            }); 
            
        });
    });
    setTimeout(() => {location.reload();}, 3000);
}

// ==========================================

// FETCHING IMAGES


db.collection("home_slider_images").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc){
        var colDiv = document.createElement("div");
        colDiv.classList.add("col-md-3", "col-sm-12");

        var sliderImgHolder = document.createElement("div");
        sliderImgHolder.classList.add("sliderimageholder");

        var img = document.createElement("img");
        img.src = doc.data().image;
        img.classList.add("sliderimage");
        img.alt = "Image";

        sliderImgHolder.appendChild(img);      
        colDiv.appendChild(sliderImgHolder);
        document.getElementById("addImage").appendChild(colDiv);
    });
});


db.collection("onboarding_images").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var colDiv = document.createElement("div");
        colDiv.classList.add("col-md-4", "col-sm-12");

        var onboardingImgHolder = document.createElement("div");
        onboardingImgHolder.classList.add("onboardimageholder");

        var img = document.createElement("img");
        img.src = doc.data().onboardingImage;
        img.classList.add("onboardimage");
        img.alt = "Image";
        onboardingImgHolder.appendChild(img);
        colDiv.appendChild(onboardingImgHolder);

        var textDiv = document.createElement("div");
        textDiv.classList.add("text-center");

        var h5 = document.createElement("h5");
        h5.innerText = doc.data().heading;
        h5.style.fontWeight = "bold";

        textDiv.appendChild(h5);

        var para = document.createElement("p");
        para.innerText = doc.data().description;

        textDiv.appendChild(para);
        colDiv.appendChild(textDiv);

        document.getElementById("addOnboardingImage").appendChild(colDiv);
    });
});



// where(firebase.firestore.FieldPath.documentId(), '==', 'saibhavadeesh@gmail.com')



// TEST CODE

/*
var total = 0;

db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc){
        total += doc.data().totalCost;
    });
    earnings.innerHTML = "<h3>" + total + "</h3>";
});

*/

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