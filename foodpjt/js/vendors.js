var db = firebase.firestore();

function getu(){
    document.getElementById("svendors").style.display = "none";
    document.getElementById("vendors").style.display = "block";
    document.getElementById("back").style.display = "none";
  }
function getvendor(){
    document.getElementById("vendors").style.display = "none";
    document.getElementById("svendors").style.display = "block";
    document.getElementById("back").style.display = "block";
    var user=document.getElementById("name").value;
    var svendorsList = document.getElementById("svendors");
    db.collection('tiffen_service_details')
    .get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        if(doc.data().OwnerName===user){
          svendorsList.innerHTML +=  "<tr><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+"</td><td>"+doc.data().Phone+
          "</td><td>"+doc.data().Address+
          "</td><td>"+doc.data().SubscriptionStartDate+
          "</td><td class='text-center'><i class='fa fa-edit' data-toggle='modal' data-target='#sliderModal'></i></td></tr>"
        }
      });
  });
  }
  var vendorsList = document.getElementById("vendors");
  document.getElementById("svendors").style.display = "none";
  document.getElementById("back").style.display = "none";
  document.getElementById("vendors").style.display = "block";
  db.collection('tiffen_service_details').get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        vendorsList.innerHTML +=   "<tr><td>"+doc.data().OwnerName+"</td><td>"+doc.data().Email+"</td><td>"+doc.data().Phone+
        "</td><td>"+doc.data().Address+
        "</td><td>"+doc.data().SubscriptionStartDate+
        "</td><td class='text-center'><i class='fa fa-edit' data-toggle='modal' data-target='#sliderModal'></i></tr>"
      });
  });
  