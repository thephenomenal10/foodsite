const db = firebase.firestore();
var earningchart = document.getElementById("earningchart");
 
var earningtotal=0
db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        earningtotal += doc.data().totalCost;
    });
    //earningchart.innerHTML += "<h3>" + earningtotal + "</h3>";
    console.log(earningtotal);


    
    var data = [earningtotal];
    var labels = ['JUN','JULY','Aug']
    new Chart(earningchart, {
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
                        stepSize: 5
                    }
                }]
            }
            
        }
    });
});
window.alert();