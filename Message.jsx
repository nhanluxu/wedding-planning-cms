import React from 'react';
import './Message.css';

const Message = () => {
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
      <main className="main-content">
        <div className="info-section">
          <p className="address">Địa chỉ: 202 Đ. Lô G, Phường 15, Quận 11, HCM</p>
          <p className="hotline">Hotline: <a href="tel:1900 5677">1900 5677</a></p>
          <p className="email">Gmail: <a href="mailto:hha@gmail.com">quangdat@gmail.com</a></p>
          <button className="store-button">🏪 Hệ thống cửa hàng</button>
        </div>

        {/* Contact Form and Map Section */}
        <div className="contact-map-section">
          <div className="contact-form-container">
            <h2>Hệ Thống Với Chúng Tôi</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ và tên</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Điện thoại</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Nội dung</label>
                <textarea id="message" rows="4" required></textarea>
              </div>
              <button type="submit" className="submit-button">Gửi tin nhắn</button>
            </form>
          </div>

          {/* Map Section */}
          <div className="map-section">
            <h2>Bản đồ</h2>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1196067332986!2d106.61621331441565!3d10.757673892354637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528c5768e8c99%3A0xa5e7d3ae90a1c5a8!2zMjAyIMSQLiBLaG9hYyB0aGluZyB0bG9uZyDhuqF0IEzhu5lp!5e0!3m2!1svi!2s!4v1640991769897!5m2!1svi!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="contact-info">
            <div className="logo">
                <img src="logo.svg" alt="Logo" className="logo-image" />
            </div>
            <p className="address">Địa chỉ: 70Đ. Lữ Gia, Phường 15, Quận 11, HCM</p>
            <p className="hotline">Hotline: <a href="tel:1900 5677">1900 5677</a></p>
            <p className="email">Gmail: <a href="mailto:nhan@gmail.com">quangdat@gmail.com</a></p>
        </div>
        <div className="footer-column">
          <h4>Chính Sách</h4>
          <ul>
            <li>Chính sách thành viên</li>
            <li>Chính sách thanh toán</li>
            <li>Chính sách đổi sản phẩm</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách công tác viên</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Hướng Dẫn</h4>
          <ul>
            <li>Hướng dẫn mua hàng</li>
            <li>Hướng dẫn đổi trả</li>
            <li>Hướng dẫn thanh toán</li>
            <li>Tìm kiếm</li>
            <li>Liên hệ</li>
          </ul>
        </div>
        <div className="payment-support">
            <h2 className="payment-title">Hỗ Trợ Thanh Toán</h2>
            <div className="payment-icons">
                <img src="src/assets/momo.svg" alt="Momo" className="payment-logo" />
                <img src="src/assets/nvpay.svg" alt="VNPAY" className="payment-logo" />
                <img src="src/assets/zalo.svg" alt="ZaloPay" className="payment-logo" />
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Message;