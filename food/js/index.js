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
        susersList.innerHTML += "<tbody class='table'><tr><td>"+doc.data().name+"</td><td>"+doc.data().email+"</td><td>Address : "+doc.data().address+
        "</td><td>Contact Number : "+doc.data().phone+"</td></tr></tbdody>"
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
      usersList.innerHTML += "<tr>"
      usersList.innerHTML +="<td>"+doc.data().name+"</td>"
      usersList.innerHTML +="<td>"+doc.data().email+"</td>"
      usersList.innerHTML +="<td>"+doc.data().address+"</td>"
      usersList.innerHTML +="<td>"+doc.data().phone+"</td>"
      usersList.innerHTML +="</tr>"
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


