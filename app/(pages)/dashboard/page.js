"use client";
import React, { useContext, useState, useEffect } from "react";
import CountUp from "react-countup";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { TbEyeSearch } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AuthContext } from "@/app/context/authContext";
import { redirect } from "next/navigation";
import SalesChart from "./components/charts/SalesChart";
import ViewsChart from "./components/charts/ViewsChart";
import InvetmentProfitChart from "./components/charts/InvetmentProfitChart";

// Import Shadlc components
import {
  Badge,
  CustomTable,
  TableBody,
  TableColumn,
  TableHead,
  TableHeader,
  TableRow,
} from "shadlc";

const Dashboard = () => {
  const { isLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (!isLogin) {
    return redirect("/shop-login");
  }

  // Dummy table data
  const tableData = [
    {
      id: 1,
      name: "MacBook Pro 13”",
      variants: "2 Variants",
      category: "Laptop",
      price: "$2399.00",
      status: "Delivered",
      image: "/product-01.jpg",
    },
    {
      id: 2,
      name: "Apple Watch Ultra",
      variants: "1 Variant",
      category: "Watch",
      price: "$879.00",
      status: "Pending",
      image: "/product-01.jpg",
    },
    {
      id: 3,
      name: "iPhone 15 Pro Max",
      variants: "2 Variants",
      category: "SmartPhone",
      price: "$1869.00",
      status: "Delivered",
      image: "/product-01.jpg",
    },
  ];

  // Display loading spinner if data is being fetched
  if (loading) {
    return (
      <div className="absolute left-0 top-0 w-full flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="py-10 px-5 lg:px-6 lg:w-[80%] w-full min-h-screen">
      <h1 className="text-3xl font-bold mb-5 text-gray-800">Shop Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Shop Visits", icon: <TbEyeSearch />, value: 1200 },
          { title: "Total Orders", icon: <FaShoppingCart />, value: 850 },
          {
            title: "Total Sales",
            icon: <HiMiniArrowTrendingUp />,
            value: 5600,
          },
          {
            title: "Total Investment",
            icon: <MdOutlinePayments />,
            value: 24000,
          },
          { title: "Total Profit", icon: <FaMoneyBillTrendUp />, value: 9600 },
          { title: "Total Customers", icon: <FaUsers />, value: 3000 },
        ].map((item, index) => (
          <div
            key={index}
            className="border-l-4 bg-white text-primary border-primary py-6 px-4 rounded-lg shadow-lg flex items-center space-x-6"
          >
            <div className="h-10 w-10 p-3 flex items-center justify-center bg-green-200 text-primary rounded-full">
              {item.icon}
            </div>
            <div>
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-xl font-bold">
                <CountUp end={item.value} duration={3} separator="," />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Overview */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-lg shadow-lg">
          <SalesChart />
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <ViewsChart />
        </div>
      </div>
      <div className="mt-2 rounded-lg shadow-lg">
        <InvetmentProfitChart />
      </div>

      {/* Recent Orders */}
      <div className="overflow-hidden mt-5 rounded-2xl border border-gray-200 bg-white px-6 pb-3 pt-4 sm:px-6">
        <div className="mb-10">
          <h3 className="text-xl text-center w-full font-semibold">
            Recent Orders
          </h3>
        </div>

        {/* Orders Table */}
        <CustomTable className="max-w-full overflow-x-auto bg-white !border-0">
          <TableHead className="rounded-xl">
            <TableRow className="bg-transparent !border-0">
              <TableHeader className="py-3 !border-0 font-bold text-lg text-start">
                Product
              </TableHeader>
              <TableHeader className="py-3 !border-0 font-bold text-lg text-start">
                Variants
              </TableHeader>
              <TableHeader className="py-3 !border-0 font-bold text-lg text-start">
                Category
              </TableHeader>
              <TableHeader className="py-3 !border-0 font-bold text-lg text-start">
                Status
              </TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            {tableData.map((product) => (
              <TableRow key={product.id} className="!border-0">
                <TableColumn className="py-3 !border-0">
                  <div className="flex items-center gap-3">
                    <div className="h-[50px] w-[50px] overflow-hidden rounded-md">
                      <img
                        src={product.image}
                        className="h-[50px] w-[50px]"
                        alt={product.name}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <span>{product.variants}</span>
                    </div>
                  </div>
                </TableColumn>
                <TableColumn className="py-3 !border-0">
                  {product.category}
                </TableColumn>
                <TableColumn className="py-3 !border-0">
                  {product.price}
                </TableColumn>
                <TableColumn className="py-3 !border-0">
                  <Badge
                    text={product.status}
                    size="sm"
                    variant="soft"
                    className="py-1.5 px-4 !rounded-full"
                    color={
                      product.status === "Delivered"
                        ? "!text-green-600 bg-green-200"
                        : product.status === "Pending"
                        ? "!text-orange-600 bg-orange-200"
                        : "!text-red-600 bg-red-200"
                    }
                  />
                </TableColumn>
              </TableRow>
            ))}
          </TableBody>
        </CustomTable>
      </div>
    </div>
  );
};

export default Dashboard;
