var earningchart = document.getElementById("earning-chart");
 
var earningtotal=0;
db.collection("tiffen_service_details/saibhavadeesh@gmail.com/acceptedOrders").get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        earningtotal += doc.data().totalCost;
    });
    earningchart.innerHTML += "<h3>" + earningtotal + "</h3>";


    
    var data = [earningtotal];
    var labels = ['JUN']
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
                        labelString: 'Total Earnings',
                        fontColor: 'black',
                    },
                    ticks: {
                        beginAtZero: false,
                        stepSize: 1000,
                        min: 0
                        
                    }
                }]
            }
            
        }
    });
});