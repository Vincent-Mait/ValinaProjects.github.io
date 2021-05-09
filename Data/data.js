//pie chart
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Brooklyn", "Queens", "Manhattan", "Bronx", "Staten Island"],
      datasets: [{
        label: "Motor Vechicle crashes (Thousands)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [386,329,285,177,52]
      }]
    },
    options: {
      title: {
        display: true,
        text: ['Motor Vechicle crashes in NYC (Thousands) as of May 2021', ' Created by Valina Maitland']
      }
    }
});
// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Jacob", "Ethan", "Liam", "Noah", "Jayden"],
      datasets: [
        {
          label: "Popular Baby Names",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [5344,5334,5195,4674,4666]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ['Popular Baby Names in NYC',' Created by Valina Maitland']
      }
    }
});