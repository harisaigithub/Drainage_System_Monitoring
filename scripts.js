document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("calculateBtn").addEventListener("click", calculateCapacity);
});

function calculateCapacity() {
  let rainfall = parseFloat(document.getElementById("rainfall").value);
  let area = parseFloat(document.getElementById("area").value);

  if (isNaN(rainfall) || rainfall <= 0 || isNaN(area) || area <= 0) {
      document.getElementById("result").innerHTML = "⚠️ Please enter valid positive values.";
      return;
  }

  let capacity = rainfall * area;
  document.getElementById("result").innerHTML = `Drainage Capacity: <strong>${capacity.toFixed(2)}</strong> mm/hr`;

  renderChart(rainfall, area);
}

function renderChart(rainfall, area) {
  let ctx = document.getElementById("drainageChart").getContext("2d");

  if (window.myChart) {
      window.myChart.destroy();
  }

  window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
          labels: ["Rainfall Intensity", "Drainage Area"],
          datasets: [{
              label: "Values",
              data: [rainfall, area],
              backgroundColor: ["#ff6384", "#36a2eb"],
              borderColor: ["#ff6384", "#36a2eb"],
              borderWidth: 1
          }]
      },
      options: {
          responsive: true,
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
              legend: {
                  labels: {
                      color: "white"
                  }
              }
          }
      }
  });
}
