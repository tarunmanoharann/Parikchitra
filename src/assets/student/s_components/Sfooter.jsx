import React from 'react';
import '../s-css/Sfooter.css';

const Sfooter = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>© 2023 Parikchitra. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Service</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Sfooter;