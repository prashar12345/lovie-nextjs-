import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

// Chart.register(...registerables);
const LineChart = () => {
  const data = {
    // labels: metricLabels,
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "#e84414", // COOL BLACK
        borderWidth: 1,
        borderColor: "#e84414",
        borderCapStyle: "butt",
        // borderDash: [3],
        // borderDashOffset: 0,
        borderJoinStyle: "miter",
        pointBorderColor: "#C74918",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: "white", // TEAL COLOR
        pointHoverBorderColor: "#C74918",
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 4,
        data: [24, 32, 46, 120, 321, 23, 87],
      },
    ],
  };
  return (
    <div padding="px-6">
      <div className="min-h-16 w-full pb-5">
        <Line
          height="130px"
          type="line"
          data={data}
          options={{
            maintainAspectRatio: true,
            scales: {
              yAxis: {
                grid: {
                  color: "#D9E1E5",
                  tickLength: 0,
                  borderDash: [2, 4],
                  borderColor: "rgba(0,0,0,0)",
                },
                ticks: {
                  color: "#363638",
                  padding: 10,
                },
              },
              xAxis: {
                grid: {
                  color: "#13445D",
                  tickLength: 0,
                  drawOnChartArea: false,
                },
                ticks: {
                  color: "#363638",
                  maxTicksLimit: 5,
                  padding: 20,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: "white",
                titleColor: "#e84414",
                bodyColor: "black",
                bodySpacing: 10,
                cornerRadius: 1,
                displayColors: false,
                borderColor: "#C74918",
                borderWidth: 1,
              },
            },
            interaction: {
              intersect: false,
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart;
