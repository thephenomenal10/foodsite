const db = firebase.firestore();

var usersChart = document.getElementById("users-chart");
var usersCount = document.getElementById("users-count");

var vendorsChart = document.getElementById("vendors-chart");
var vendorsCount = document.getElementById("vendors-count");


var earningsChart = document.getElementById("earnings-chart");
var earningsCount = document.getElementById("earnings-count");
 

var users = 0;
var vendors = 0;
var earnings=0;

db.collection("customer_collection").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        users++;
    });
    usersCount.innerHTML += "<h4><b>" + users + "</b></h4>";

    var data = [users];
    var labels = ['JUN']
    new Chart(usersChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    data: data
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            hover:{
                mode: 'index',
                intersect: true
            },
            scales:{
                yAxes: [{
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, 0.2)',
                        zeroLineColor: 'transparent'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Number of Users',
                        fontColor: 'black',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2
                    }
                }]
            },
        }
    });
});



db.collection("vendor_collection/vendors/registered_vendors").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        vendors++;
    });
    vendorsCount.innerHTML += "<h4><b>" + vendors + "</b></h4>";
    
    var data = [vendors];
    var labels = ['JUN']
    new Chart(vendorsChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: '#ff8243',
                    borderColor: '#ff8243',
                    data: data
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            hover:{
                mode: 'index',
                intersect: true
            },
            scales:{
                yAxes: [{
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, 0.2)',
                        zeroLineColor: 'transparent'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Number of Vendors',
                        fontColor: 'black',
                    },
                    ticks: {
                        beginAtZero: true,
                        stepSize: 2
                    }
                }]
            }
            
        }
    });
});


db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        earnings += doc.data().totalCost;
    });
    earningsCount.innerHTML += "<h4><b>" + earnings + "</b></h4>";


    
    var data = [earnings];
    var labels = ['JUN']
    new Chart(earningsChart, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [
                {
                    backgroundColor: '#00bb00',
                    borderColor: '#00bb00',
                    data: data
                }
            ]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            hover:{
                mode: 'index',
                intersect: true
            },
            scales:{
                yAxes: [{
                    gridLines: {
                        display: true,
                        lineWidth: '4px',
                        color: 'rgba(0, 0, 0, 0.2)',
                        zeroLineColor: 'transparent'
                    },
                    scaleLabel:{
                        display: true,
                        labelString: 'Total Earnings',
                        fontColor: 'black',
                    },
                    ticks: {
                        beginAtZero: false,
                        stepSize: 5
                    }
                }]
            }
            
        }
    });
});