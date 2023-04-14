function openCity(evt, cityName) {
    var i, tablinks, tabcontent;
    tablinks = document.getElementsByClassName("tablinks");
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

new Chart(document.querySelector('.London_chart'), {
    type: 'bar',
    data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
    },{
        label: '# of People',
        data: [10, 18, 2, 1, 3, 5],
        borderWidth: 1
    }]
    },
    options: {
    scales: {
        y: {
        beginAtZero: true
        }
    }
    }
});

new Chart(document.querySelector('.Paris_chart'), {
    type: 'doughnut',
    data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]}
});

new Chart(document.querySelector('.Rome_chart'), {
    type: 'line',
    data: {
    labels:['January','February','March','April','May','June','July'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3, 18],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
    },{
        label: '# of People',
        data: [10, 5, 13, 15, 6, 3, 17],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.2
    }]}
});