import React from 'react'
import BrandOne from '../assets/img/brand/Brand_One.png'
import BrandTwo from '../assets/img/brand/Brand_Two.png'
import BrandThree from '../assets/img/brand/Brand_Three.png'
import BrandFour from '../assets/img/brand/Brand_Four.png'
import BrandFive from '../assets/img/brand/Brand_Five.png'
import BrandSix from '../assets/img/brand/Brand_Six.png'
import NewOne from '../assets/img/new/NewOne.jpg'
import NewTwo from '../assets/img/new/NewTwo.jpg'
import NewThree from '../assets/img/new/NewThree.jpg'
import NewFour from '../assets/img/new/NewFour.jpg'
import Featured_One from '../assets/img/featured/Featured_One.jpg'
import Featured_Two from '../assets/img/featured/Featured_Two.jpg'
import Featured_Three from '../assets/img/featured/Featured_Three.jpg'
import Featured_Four from '../assets/img/featured/Featured_Four.jpg'
import Clothes_One from '../assets/img/clothes/Clothes_One.jpg'
import Clothes_Two from '../assets/img/clothes/Clothes_Two.jpg'
import Clothes_Three from '../assets/img/clothes/Clothes_Three.jpg'
import Clothes_Four from '../assets/img/clothes/Clothes_Four.jpg'
import Watch_One from '../assets/img/watches/Watch_One.jpg'
import Watch_Two from '../assets/img/watches/Watch_Two.jpg'
import Watch_Three from '../assets/img/watches/Watch_Three.jpg'
import Watch_Four from '../assets/img/watches/Watch_Four.jpg'
import Shoes_One from '../assets/img/shoes/Shoes_One.jpg'
import Shoes_Two from '../assets/img/shoes/Shoes_Two.jpg'
import Shoes_Three from '../assets/img/shoes/Shoes_Three.jpg'
import Shoes_Four from '../assets/img/shoes/Shoes_Four.jpg'
import Shoes_Five from '../assets/img/shoes/Shoes_Five.jpg'
import Shoes_Six from '../assets/img/shoes/Shoes_Six.jpg'
import Shoes_Seven from '../assets/img/shoes/Shoes_Seven.jpg'
import Shoes_Eight from '../assets/img/shoes/Shoes_Eight.jpg'
const homeDetails = () => {
  return (
    <>
    <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>E-commerce Webapp</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css" integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV" crossOrigin="anonymous" />
        <section id="home">
          <div className="container">
            <h5>NEW ARRIVALS</h5>
            <h1><span>Best Price</span> This year</h1>
            <p>Shoomatic offers your very comfortable time <br />
              on walking and exercises.
            </p>
            <button className="main-btn">Shop Now</button>
          </div>
        </section>
        <section id="brand" className="container">
          <div className="row">
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandOne} alt="" />
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandTwo} alt="" />
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandThree} alt="" />
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandFour} alt="" />
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandFive} alt="" />
            <img className="img-fluid col-lg-2  col-md-4 col-6" src={BrandSix} alt="" />
          </div>
        </section>
        <section id="new" className="w-100">
          <div className="row p-0 m-0">
            <div className="one col-lg-4 col-md-12 col-12 p-0">
              <img className="img-fluid" src={NewOne} alt="" />
              <div className="details">
                <h2>Extreme Rare Sneakers</h2>
                <button className="text-uppercase">Shop now</button>
              </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
              <img className="img-fluid" src={NewTwo} alt="" />
              <div className="details">
                <h2>Awesome Blank Outfit</h2>
                <button className="text-uppercase">Shop now</button>
              </div>
            </div>
            <div className="one col-lg-4 col-md-12 col-12 p-0">
              <img className="img-fluid" src={NewThree} alt="" />
              <div className="details">
                <h2>Sportwear Up To 50% Off</h2>
                <button className="text-uppercase">Shop now</button>
              </div>
            </div>
          </div>
        </section>
        <section id="featured" className="my-5 pb-5">
          <div className="container text-center mt-5 py-5">
            <h3>Our Featured</h3>
            <hr className="mx-auto" />
            <p>Here you can checke out our new products with fair price on rymo.</p>
          </div>
          <div className="row mx-auto container-fluid">
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Featured_One} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Featured_Two} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Featured_Three} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Featured_Four} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </section>
        <section id="banner" className="my-5 py-5">
          <div className="container">
            <h4>MID SEASON'S SALE</h4>
            <h1>Autum Collection <br />UP TO 20% OFF</h1>
            <button className="text-uppercase">Shop Now</button>
          </div>
        </section>
        <section id="clothes" className="my-5">
          <div className="container text-center mt-5 py-5">
            <h3>Dresses &amp; Jumpsuits</h3>
            <hr className="mx-auto" />
            <p>Here you can checke out our new products with fair price on rymo.</p>
          </div>
          <div className="row mx-auto container-fluid">
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Clothes_One} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name" />
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Clothes_Two} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Clothes_Three} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Clothes_Four} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </section>
        <section id="watches" className="my-5">
          <div className="container text-center mt-5 py-5">
            <h3>Best Watches</h3>
            <hr className="mx-auto" />
            <p>Here you can checke out our new products with fair price on rymo.</p>
          </div>
          <div className="row mx-auto container-fluid">
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Watch_One} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Watch_Two} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Watch_Three} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Watch_Four} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </section>
        <section id="shoes" className="my-5 pb-5">
          <div className="container text-center mt-5 py-5">
            <h3>Casual Shoes</h3>
            <hr className="mx-auto" />
            <p>Here you can checke out our new products with fair price on rymo.</p>
          </div>
          <div className="row mx-auto container-fluid">
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shoes_Eight} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shoes_Seven} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shoes_Six} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shoes_Five} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </section>
</div>
    </>
  )
}

export default homeDetails