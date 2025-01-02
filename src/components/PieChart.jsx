import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement // Register Pie chart component
);

const PieChart = () => {
  // Dummy data for Pie chart (User Distribution)
  const pieChartData = {
    labels: ['New Users', 'Active Users', 'Inactive Users'],
    datasets: [
      {
        data: [20, 120, 10], // Example distribution data
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF4384', '#36A0EB', '#FFBD56'],
      },
    ],
  };

  return (
    <>
      {/* Pie Chart */}
      <div className="bg-white p-4 rounded-lg mt-20 flex justify-center items-center">
        <div className="w-52 h-64"> {/* Adjusting the size of the Pie chart */}
          <h4 className="text-lg font-semibold text-center mb-4">User Distribution</h4>
          <Pie data={pieChartData} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
