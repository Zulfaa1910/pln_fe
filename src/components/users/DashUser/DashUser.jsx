import React from "react";
import Chart from "react-apexcharts";
import "./DashUser.css";

const DashUser = () => {
  const randomText = "Ini adalah teks acak untuk container di bawah Dashboard";

  const data = {
    series: [
      {
        name: "Login",
        data: [120, 140, 110, 135, 150, 160, 170], // Data jumlah login per periode
      },
      {
        name: "Form Upload",
        data: [50, 60, 70, 55, 70, 80, 90], // Data jumlah formulir yang diunggah per periode
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#4caf50", "#2196f3"], // Warna untuk Login dan Form Upload
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#4caf50", "#2196f3"], // Warna untuk Login dan Form Upload
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "right",
        markers: {
          radius: 12,
        },
        itemMargin: {
          vertical: 10,
        },
      },
    },
  };

  return (
    <div className="DashUser">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="container-full">
        <p>{randomText}</p>
      </div>
      <div className="chart-container">
        <Chart options={data.options} series={data.series} type="area" />
      </div>
    </div>
  );
};

export default DashUser;
