import React from 'react';
import './Setting.css';

const Setting = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Massenges</h1>
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search here..." />
        </div>
        <div className="user-icons">
          <div className="icon-container">
            <span className="icon">⚙️</span>
            <span className="icon-label">Hệ thống</span>
          </div>
          <div className="icon-container">
            <span className="icon">👤</span>
            <span className="icon-label">Tài Khoản</span>
          </div>
        </div>
      </header>
      
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">Trang chủ</li>
          <li className="navbar-item">Về chúng tôi</li>
          <li className="navbar-item">Sản phẩm</li>
          <li className="navbar-item">Câu hỏi thường gặp</li>
          <li className="navbar-item">Tin tức</li>
          <li className="navbar-item">Liên hệ</li>
        </ul>
      </nav>

      <div className="settings-container">
        <h2 className="settings-title">Settings</h2>
        <p className="settings-description">Tìm cài đặt bạn cần</p>
        <div className="card-container">
          <div className="card">
            <div className="icon">👤</div>
            <h3>Người Dùng</h3>
            <p>Admin, thay đổi thông tin.</p>
          </div>
          <div className="card">
            <div className="icon">📋</div>
            <h3>Danh Sách Sản Phẩm</h3>
            <p>Cập nhật sản phẩm, danh mục sản phẩm, bộ lọc sắp xếp.</p>
          </div>
          <div className="card">
            <div className="icon">❓</div>
            <h3>Trung Tâm Trợ Giúp</h3>
            <p>Admin, thay đổi thông tin.</p>
          </div>
        </div>
      </div>

      {/* Privacy Settings Section */}
      <div className="privacy-settings-container">
        <div className="item">
          <div className="accept-label">
            <input type="checkbox" className="accept-checkbox" />
            <span className="accept-text">Accepts</span>
          </div>
          <p className="description">
            Allows use of private domain name for wedding website.
          </p>
        </div>

        <div className="privacy-center">
          <div className="icon">🔒</div>
          <h3>Privacy Center</h3>
          <p>Make privacy choices that are right for you. Learn how to manage and control your privacy across products.</p>
        </div>

        <div className="item">
          <div className="accept-label">
            <input type="checkbox" className="accept-checkbox" />
            <span className="accept-text">Accepts</span>
          </div>
          <p className="description">
            Notifications
          </p>
          <p className="notification-description">
            Send notifications to guests about the latest updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Setting;