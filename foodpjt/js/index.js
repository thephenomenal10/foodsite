const db = firebase.firestore();


function getuser(){
  document.getElementById("users").style.display = "none";
  //document.getElementById("susers").style.display = "none";
  var user=document.getElementById("uname").value;
  console.log(user);
  var susersList = document.getElementById("susers");
  db.collection('customer_collection')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      document.getElementById("susers").style.display = "block";
      if(doc.data().name===user){
        susersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
      }
    });
});
//document.getElementById("users").style.display = "block";
}
var usersList = document.getElementById("users");
document.getElementById("susers").style.display = "none";
document.getElementById("users").style.display = "block";
db.collection('customer_collection').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        usersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
    });
});

/*function getaddr(id) {
  console.log("executed");
  return db.collection('tiffen_service_details/'+id+'/')
  .once('value')
    .then(function(bref) {
      console.log(bref.data());
       var add=bref.data().Address;
       console.log(add);
        return {add};
});
}*/
function getvendor(){
  document.getElementById("vendors").style.display = "none";
  //document.getElementById("susers").style.display = "none";
  document.getElementById("svendors").style.display = "block";
  var user=document.getElementById("name").value;
  var svendorsList = document.getElementById("svendors");
  db.collection('vendor_collection/vendors/registered_vendors/')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if(doc.data().Name===user){
        svendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
      }
    });
});
//document.getElementById("users").style.display = "block";
}


var vendorsList = document.getElementById("vendors");
document.getElementById("svendors").style.display = "none";
document.getElementById("vendors").style.display = "block";
db.collection('vendor_collection/vendors/registered_vendors/').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      //console.log(doc.data());
      //var addr=getaddr(doc.data().Email)
      //console.log(addr);
      vendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +doc.data().Phone+"</p></div>"
    });
    //console.log("completed");
});




var totalearning = 0;
db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {

   querySnapshot.forEach(function(doc) {
       totalearning += doc.data().totalCost;
   });
   earning.innerHTML += "<h3>" + totalearning + "</h3>";
});


  var total =0;
     db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot) {
    
        querySnapshot.forEach(function(doc) {
            total += doc.data().totalCost;
        });
        earnings.innerHTML += "<h3>" + total + "</h3>";
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
