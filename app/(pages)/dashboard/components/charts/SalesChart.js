"use client"; // Ensure it's a client component

import dynamic from "next/dynamic";

// Dynamically import Chart with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SalesChart() {
  const options = {
    colors: ["#22C55E"], // Bright Tailwind green
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 260,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 8, // More rounded corners for a modern look
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
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
      labels: {
        style: {
          fontSize: "13px",
          fontWeight: 500,
          colors: ["#6B7280"], // Neutral gray for readability
        },
      },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
      labels: { colors: "#6B7280" }, // Consistent text color
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "13px",
          fontWeight: 500,
          colors: ["#6B7280"],
        },
      },
    },
    grid: {
      borderColor: "#E5E7EB", // Subtle light gray grid lines
      yaxis: { lines: { show: false } },
    },
    fill: {
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.4,
        gradientToColors: ["#16A34A"], // Gradient from green to a lighter tone
        inverseColors: false,
        opacityFrom: 0.9,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      theme: "dark",
      x: { show: false },
      y: {
        formatter: (val) => `${val} Sales`,
      },
    },
  };

  const series = [
    {
      name: "Sales",
      data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
    },
  ];

  return (
    <div className="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        Monthly Sales
      </h2>
      <div id="chartOne">
        <Chart options={options} series={series} type="bar" height={250} />
      </div>
    </div>
  );
}
