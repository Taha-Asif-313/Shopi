"use client"; // Ensure it's a client component

import dynamic from "next/dynamic";

// Dynamically import Chart with SSR disabled to prevent "window is not defined" error
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function InvetmentProfitChart() {
  const options = {
    legend: {
      show: false, // Hide legend
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#16a34a", "#1e293b"], // Use Tailwind Green & Gray
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "line",
      toolbar: {
        show: false, // Hide chart toolbar
      },
    },
    stroke: {
      curve: "smooth", // Use smooth curve for modern UI
      width: [3, 3], // Line width for each dataset
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0, // Marker size
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: {
        size: 8, // Marker size on hover
      },
    },
    grid: {
      borderColor: "#e5e7eb", // Light gray grid lines
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false, // Hide numbers on graph
    },
    tooltip: {
      enabled: true,
      theme: "dark",
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#6B7280"], // Gray color for labels
        },
      },
    },
  };

  const series = [
    {
      name: "Investment",
      data: [180, 190, 170, 160, 175, 165, 170, 205, 230, 210, 240, 235],
    },
    {
      name: "Profit",
      data: [40, 30, 50, 40, 55, 40, 70, 100, 110, 120, 150, 140],
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg dark:bg-gray-900">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Investment & Revenue Overview
      </h2>
      <div id="chartEight">
        <Chart options={options} series={series} type="area" height={310} />
      </div>
    </div>
  );
}
