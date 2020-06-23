
    
var db = firebase.firestore();

function getuser(){
  document.getElementById("users").style.display = "none";
  document.getElementById("susers").style.display = "block";
  var user=document.getElementById("uname").value;
  console.log(user);
  var susersList = document.getElementById("susers");
  db.collection('customer_collection')
  .where('name', '==', 'user').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        susersList.innerHTML += "<div class='card'><h6>"+doc.data().name+"</h6><p>Email : "+doc.data().email+"</p><p>Address : "+doc.data().address+
        "<p><p>Contact Number : "+doc.data().phone+"</p></div>"
    });
});

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

function getaddr(id) {
  console.log("executed");
  return db.collection('tiffen_service_details/'+id+'/')
  .once('value')
    .then(function(bref) {
      console.log(bref.data());
       var add=bref.data().Address;
       console.log(add);
        return {add};
});
}

var vendorsList = document.getElementById("vendors");

db.collection('vendor_collection/vendors/registered_vendors/').get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      console.log(doc.data());
      var addr=getaddr(doc.data().Email)
      console.log(addr);
      vendorsList.innerHTML +=  "<div class='card'><p>Name : "+doc.data().Name+"</p><p>Email : "
      +doc.data().Email+"</p><p>Contact Number : "
      +addr+"</p></div>"
    });
    console.log("completed");
});