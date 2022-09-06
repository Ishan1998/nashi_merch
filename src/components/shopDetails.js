import React from 'react'
import Shop_One from '../assets/img/shop/Shop_One.jpg'
import Shop_Two from '../assets/img/shop/Shop_Two.jpg'
import Shop_Three from '../assets/img/shop/Shop_Three.jpg'
import Shop_Four from '../assets/img/shop/Shop_Four.jpg'
import Shop_Five from '../assets/img/shop/Shop_Five.jpg'
import Shop_Six from '../assets/img/shop/Shop_Six.jpg'
import Shop_Seven from '../assets/img/shop/Shop_Seven.jpg'
import Shop_Eight from '../assets/img/shop/Shop_Eight.jpg'
import Shop_Nine from '../assets/img/shop/Shop_Nine.jpg'
import Shop_Ten from '../assets/img/shop/Shop_Ten.jpg'
import Shop_Eleven from '../assets/img/shop/Shop_Eleven.jpg'
import Shop_Tweleve from '../assets/img/shop/Shop_Twelve.jpg'
import Shop_Thirteen from '../assets/img/shop/Shop_Thirteen.jpg'
import Shop_Fourteen from '../assets/img/shop/Shop_Fourteen.jpg'
import Shop_Fifteen from '../assets/img/shop/Shop_Fifteen.jpg'
import Shop_Sixteen from '../assets/img/shop/Shop_Sixteen.jpg'
import Shop_Seventeen from '../assets/img/shop/Shop_Seventeen.jpg'
import Shop_Eighteen from '../assets/img/shop/Shop_Eighteen.jpg'
import Shop_Nineteen from '../assets/img/shop/Shop_Nineteen.jpg'
import Shop_Twenty from '../assets/img/shop/Shop_Twenty.jpg'
import Shop_TwentyOne from '../assets/img/shop/Shop_TwentyOne.jpg'
import Shop_TwentyTwo from '../assets/img/shop/Shop_TwentyTwo.jpg'
import Shop_TwentyThree from '../assets/img/shop/Shop_TwentyThree.jpg'
import Shop_TwentyFour from '../assets/img/shop/Shop_TwentyFour.jpg'
import Shop_TwentyFive from '../assets/img/shop/Shop_TwentyFive.jpg'
import Shop_TwentySix from '../assets/img/shop/Shop_TwentySix.jpg'
import ProductDetails from '../components/productsDetails'
import ProductsDetails from '../components/productsDetails'
const shopDetails = () => {
  return (
    <>
    <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shop</title>
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.2/css/all.css" integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV" crossOrigin="anonymous" />
        <style dangerouslySetInnerHTML={{__html: "\n            .product img{\n                width: 100%;\n                height: auto;\n                box-sizing: border-box;\n                object-fit: cover;\n                border-radius: 20%;\n            }\n        " }} />
        
        <section id="featured" className="my-5 py-5">
          <div className="container mt-5 py-5">
            <h2 className="font-weight-bold">Our Featured</h2>
            <hr />
            <p>Here you can check out our new products with fair price on rymo.</p>
          </div>
          <div className="row mx-auto container">
            <div  className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shop_One} alt="" />
              <div className="star">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5 className="p-name">Sport Boots</h5>
              <h4 className="p-price">$92.00</h4>
              <button onClick={ProductsDetails} className="buy-btn">Buy Now</button>
            </div>
            <div className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src={Shop_Two} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Three} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Six} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Five} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Four} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Seven} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Nine} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Eight} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_TwentyTwo} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Eleven} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Tweleve} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Thirteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Fourteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Fifteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Sixteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Seventeen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Eighteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Nineteen} alt="" />
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
              <img className="img-fluid mb-3" src={Shop_Twenty} alt="" />
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
            {/* Pagination */}
            <div className="pindicator">
              <div className="bullet current">
                <span className="icon">1</span>
                <div className="text">Step 1</div>
              </div>
              <div className="bullet ">
                <span className="icon">2</span>
                <div className="text">Step 2</div>
              </div>
              <div className="bullet next future">
                <span className="icon">3</span>
                <div className="text">Step 3</div>
              </div>
              <div className="bullet future">
                <span className="icon">4</span>
                <div className="text">Step 4</div>
              </div>
              <div className="bullet future">
                <span className="icon">5</span>
                <div className="text">Step 5</div>
              </div>
              <div className="bullet future">
                <span className="icon">6</span>
                <div className="text">Step 6</div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default shopDetails