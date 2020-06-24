var db = firebase.firestore();


function login(){
  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;
  db.collection('admin').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        var email=doc.data().email;
        var password=doc.data().password;
        if((userEmail===email) && (userPass===password)){
          window.alert("Logged in successfully");
          window.location.href="./public/dashboard.html";
        }
        else{
          window.alert("Error in email or paasword");
        }
    });
});

}

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
        susersList.innerHTML += "<tr><td>"+doc.data().name+"</td><td>"+doc.data().email+"</td><td>"+doc.data().address+
        "</td><td>"+doc.data().phone+"</td></tr>"
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
      usersList.innerHTML += "<tr><td>"+doc.data().name+"</td><td>"+doc.data().email+"</td><td>"+doc.data().address+
        "</td><td>"+doc.data().phone+"</td></tr>"
      
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
  db.collection('tiffen_service_details')
  .get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      if(doc.data().Name===user){
        svendorsList.innerHTML +=  "<tr><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+"</td><td>"+doc.data().Phone+
        "</td><td>"+doc.data().Address+
        "</td><td>"+doc.data().SubscriptionStartDate+
        "</td></tr>"
      }
    });
});
}
var vendorsList = document.getElementById("vendors");
document.getElementById("svendors").style.display = "none";
document.getElementById("vendors").style.display = "block";
db.collection('tiffen_service_details').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      vendorsList.innerHTML +=   "<tr><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+"</td><td>"+doc.data().Phone+
      "</td><td>"+doc.data().Address+
      "</td><td>"+doc.data().SubscriptionStartDate+
      "</td></tr>"
    });
});


