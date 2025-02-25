import React from 'react';
import './Dashboard.css';
import './SalesSummary.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Đăng ký các thành phần của Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Component SalesSummary
const SalesSummary = ({ sales, orders, productsSold }) => {
  return (
    <div className="sales-summary">
      <div className="sales-card card-sales">
        <i className="fas fa-dollar-sign icon"></i>
        <h3 className="card-value">${sales}</h3>
        <p className="card-description">Total Sales</p>
        <p className="card-increase">+8% from yesterday</p>
      </div>
      <div className="sales-card card-orders">
        <i className="fas fa-shopping-cart icon"></i>
        <h3 className="card-value">{orders}</h3>
        <p className="card-description">Total Orders</p>
        <p className="card-increase">+5% from yesterday</p>
      </div>
      <div className="sales-card card-products">
        <i className="fas fa-box icon"></i>
        <h3 className="card-value">{productsSold}</h3>
        <p className="card-description">Products Sold</p>
        <p className="card-increase">+1.2% from yesterday</p>
      </div>
    </div>
  );
};

// Component RevenueChart
const RevenueChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Online Sales',
        data: [12000, 15000, 20000, 13000, 16000, 9000, 14000],
        backgroundColor: 'rgba(76, 175, 80, 1)',
        borderColor: 'rgba(76, 175, 80, 1)',
        borderWidth: 2,
      },
      {
        label: 'Offline Sales',
        data: [8000, 10000, 15000, 11000, 12000, 7000, 9000],
        backgroundColor: 'rgba(33, 150, 243, 1)',
        borderColor: 'rgba(33, 150, 243, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Tắt hiển thị legend mặc định
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Thêm dấu phẩy vào số
          },
        },
      },
    },
  };

  return (
    <div className="revenue-chart-container">
      <h2 className="chart-title">Total Revenue</h2>
      <Bar data={data} options={options} />
      <div className="chart-legend">
        <div className="chart-legend-item">
          <div className="legend-color-box online-sales"></div>
          <span>Online Sales</span>
        </div>
        <div className="chart-legend-item">
          <div className="legend-color-box offline-sales"></div>
          <span>Offline Sales</span>
        </div>
      </div>
    </div>
  );
};

// Component TopProducts
const TopProducts = () => {
  const products = [
    { id: '01', name: 'Home Decor Range', popularity: 45 },
    { id: '02', name: 'Disney Princess Pink Bag 18\'', popularity: 29 },
    { id: '03', name: 'Bathroom Essentials', popularity: 18 },
    { id: '04', name: 'Apple Smartwatches', popularity: 25 },
  ];

  return (
    <div className="top-products-container">
      <h2 className="table-title">Top Products</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Sales</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <div className="progress-container">
                  <div
                    className={`progress-bar popularity-${product.popularity}`}
                    style={{ width: `${product.popularity}%` }}
                  ></div>
                  <span>{product.popularity}%</span>
                </div>
              </td>
              <td className="sales">{Math.floor(Math.random() * 1000 + 1)} Sales</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// Hàm để xác định màu sắc của thanh tiến độ
const getColor = (popularity) => {
  if (popularity >= 40) return 'rgba(76, 175, 80, 1)'; // Màu xanh lá
  if (popularity >= 20) return 'rgba(33, 150, 243, 1)'; // Màu xanh dương
  return '#ff9800'; // Màu cam
};

// Component Dashboard
const Dashboard = () => {
  const salesData = {
    sales: 1000,
    orders: 300,
    productsSold: 5,
  };

  return (
    <div className="dashboard-container">
      <div className="header-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search here..." />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <SalesSummary {...salesData} />
      <RevenueChart />
      <TopProducts />
    </div>
  );
};

export default Dashboard;