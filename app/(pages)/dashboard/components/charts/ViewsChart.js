"use client"; // Ensures it's a client component

import dynamic from "next/dynamic";

// Dynamically import Chart with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ViewsChart() {
  const options = {
    chart: {
      type: "line",
      height: 250,
      fontFamily: "Outfit, sans-serif",
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    colors: ["#16a34a"], // Use a modern, sleek color
    stroke: {
      curve: "smooth", // Smooth line
      width: 3, // Line thickness
    },
    markers: {
      size: 0, // Only visible on hover
      colors: ["#16a34a"],
      strokeWidth: 2,
      strokeColors: "#fff",
      hover: { size: 7 },
    },
    grid: {
      show: false, // Hides background grid for a cleaner UI
    },
    xaxis: {
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
    },
    yaxis: {
      labels: { style: { colors: "#9CA3AF", fontSize: "12px" } },
    },
    tooltip: {
      enabled: true, // Shows tooltip when hovering
      theme: "dark",
    },
    legend: { show: false }, // Hide legend for a minimal look
  };

  const series = [
    {
      name: "Views",
      data: [500, 190, 140, 1000, 300, 210, 230, 280, 310, 400, 450, 500],
    },
  ];

  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Monthly Views
      </h2>
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
}
