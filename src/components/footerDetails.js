import React from 'react'
import Logo from '../assets/img/logo2.png'
import Insta_One from '../assets/img/insta/Insta_One.jpg'
import Insta_Two from '../assets/img/insta/Insta_Two.jpg'
import Insta_Three from '../assets/img/insta/Insta_Three.jpg'
import Insta_Four from '../assets/img/insta/Insta_Four.jpg'
import Insta_Five from '../assets/img/insta/Insta_Five.jpg'
const footerDetails = () => {
  return (
    <>
            {/* Footer */}
            <footer className="mt-5 py-5">
          <div className="row container mx-auto pt-5">
            <div className="footer-one col-lg-3 col-md-6 col-12">
              <img src={Logo} alt="" />
              <p className="pt-3">Best E-commerce Platform</p>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
              <h5 className="pb-2">Featured</h5>
              <ul className="text-uppercase list-unstyled">
                <li><a href="#">men</a></li>
                <li><a href="#">women</a></li>
                <li><a href="#">boys</a></li>
                <li><a href="#">girls</a></li>
                <li><a href="#">new arrivals</a></li>
                <li><a href="#">shoes</a></li>
                <li><a href="#">clothes</a></li>
              </ul>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12 mb-3">
              <h5 className="pb-2">Contact Us</h5>
              <div>
                <h6 className="text-uppercase">Address</h6>
                <p>123 STREET NAME, CITY, CANADA</p>
              </div>
              <div>
                <h6 className="text-uppercase">Phone</h6>
                <p>(123) 456-7890</p>
              </div>
              <div>
                <h6 className="text-uppercase">Email</h6>
                <p>test@gmail.com</p>
              </div>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12">
              <h5 className="pb-2">Instagram</h5>
              <div className="row">
                <img className="img-fluid w-25 h-100 m-2" src={Insta_One} alt="" />
                <img className="img-fluid w-25 h-100 m-2" src={Insta_Two} alt="" />
                <img className="img-fluid w-25 h-100 m-2" src={Insta_Three} alt="" />
                <img className="img-fluid w-25 h-100 m-2" src={Insta_Four} alt="" />
                <img className="img-fluid w-25 h-100 m-2" src={Insta_Five} alt="" />
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>Ryka eCommerce 2021. All Rights Reserved</p>
            <a href><i className><i className="fa-brands fa-facebook" /></i></a><i className>
              <a href><i className><i className="fa-brands fa-twitter" /></i></a><i className>
                <a href><i className><i className="fa-brands fa-instagram" /></i></a><i className>
                </i></i></i></div><i className><i className><i className>
              </i></i></i></footer><i className><i className><i className>
            </i></i></i>
    </>
  )
}

export default footerDetails