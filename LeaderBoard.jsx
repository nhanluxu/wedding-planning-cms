import React from 'react';
import './LeaderBoard.css';
const Statistics = () => {
  return (
    <div className="statistics-container">
      <h2 className="statistics-title">Thông Kê</h2>
      <div className="summary-cards">
        <div className="summary-card">
          <i className="fas fa-users card-icon"></i>
          <h3 className="card-value">15</h3>
          <p className="card-description">Khách hàng</p>
        </div>
        <div className="summary-card">
          <i className="fas fa-box card-icon"></i>
          <h3 className="card-value">34</h3>
          <p className="card-description">Sản phẩm</p>
        </div>
        <div className="summary-card">
          <i className="fas fa-shopping-cart card-icon"></i>
          <h3 className="card-value">66</h3>
          <p className="card-description">Đơn hàng</p>
        </div>
        <div className="summary-card">
          <i className="fas fa-dollar-sign card-icon"></i>
          <h3 className="card-value">134.500.000 Đ</h3>
          <p className="card-description">Tổng doanh thu</p>
        </div>
      </div>
    </div>
  );
};

const RevenueTable = () => {
  return (
    <div className="revenue-table">
      <h3 className="table-title">Doanh Thu Theo Năm</h3>
      <table>
        <thead>
          <tr>
            <th>SST</th>
            <th>Năm</th>
            <th>Số Lượng Đơn</th>
            <th>Doanh Thu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2025</td>
            <td>66</td>
            <td>134.500.000 Đ</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2024</td>
            <td>828</td>
            <td>13.400.500.000 Đ</td>
          </tr>
          <tr>
            <td>3</td>
            <td>2023</td>
            <td>547</td>
            <td>12.100.200.000 Đ</td>
          </tr>
          <tr>
            <td>4</td>
            <td>2022</td>
            <td>346</td>
            <td>10.300.000.000 Đ</td>
          </tr>
        </tbody>
      </table>
      <p className="details-link">Xem chi tiết</p>
    </div>
  );
};

const RevenueByProduct = () => {
  return (
    <div className="revenue-by-product">
      <h3 className="table-title">Doanh Thu Theo Sản Phẩm</h3>
      <table>
        <thead>
          <tr>
            <th>Mã Sản Phẩm</th>
            <th>Tên Sản Phẩm</th>
            <th>Số Lượng Bán</th>
            <th>Doanh Thu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Váy Cưới WBS-101</td>
            <td>66</td>
            <td>134.500.000 Đ</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Name Combo</td>
            <td>240</td>
            <td>400.500.000 Đ</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Thiệp Cưới</td>
            <td>6300</td>
            <td>2.000.000 Đ</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hoa</td>
            <td>100</td>
            <td>8.000.000 Đ</td>
          </tr>
        </tbody>
      </table>
      <p className="details-link">Xem chi tiết</p>
    </div>
  );
};

const LeaderBoard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2 className="dashboard-title">Leaderboard</h2>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search here..."
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <Statistics />
      <RevenueTable />
      <RevenueByProduct />
    </div>
  );
};

export default LeaderBoard;