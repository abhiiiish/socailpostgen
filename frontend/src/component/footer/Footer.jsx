import React from 'react';
import './Footer.css'; 
import logo from '../../assest/logo.png'
const Footer = () => {
  return (
    <>
    <div className='footer text-white'>
      <footer className="container border-3 border-bottom border-white text-white">
      <div className="row">
        <div className="col-md-4 my-4">
          <img src={logo} alt="Company Logo" className="logo" />
          <p className='my-2 email'>support@vyaparify.com</p>
          <p className='number'>+91 - 9698935935</p>
          <div className="social-icons">
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          </div>
        </div>

        <div className="col-md-4 footer-links my-4 text-white">
          <h4 className=''>Useful Links</h4>
          <ul className="list-unstyled">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="col-md-4 footer-links my-4">
          <h4>Policies</h4>
          <ul className="list-unstyled">
            <li><a href="#">Refund and Cancellation</a></li>
            <li><a href="#">Terms and Conditions</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
    <footer>
      <div className='d-flex container justify-content-around my-3 flex-wrap'>
        <p>© Copyrights 2023. All rights reserved.</p>
        <p>Created with ❤️ by Vyaparify</p>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Footer;
