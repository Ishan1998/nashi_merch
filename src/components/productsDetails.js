import React from 'react'
import useScript from '../hooks/useScript.js'
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
import Shop_Twelve from '../assets/img/shop/Shop_Twelve.jpg'
import Shop_Thirteen from '../assets/img/shop/Shop_Thirteen.jpg'
import Shop_Fourteen from '../assets/img/shop/Shop_Fourteen.jpg'
import Shop_Fifteen from '../assets/img/shop/Shop_Fifteen.jpg'
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
import Featured_One from '../assets/img/featured/Featured_One.jpg'
import Featured_Two from '../assets/img/featured/Featured_Two.jpg'
import Featured_Three from '../assets/img/featured/Featured_Three.jpg'
import Featured_Four from '../assets/img/featured/Featured_Four.jpg'

const MyComponent = props =>{
  useScript();
}

const productsDetails = () => {
  return (
    <>
        <section className="container sproduct my-5 pt-5">
          <div className="row mt-5">
            <div className="col-lg-5 col-md-12 col-12">
              <img className="img-fluid w-100 pb-1" src={Shop_One} id="MainImg" alt="" />
              <div className="small-img-group">
                <div className="small-img-col">
                  <img src={Shop_One} width="100%" className="small-img" alt="" />
                </div>
                <div className="small-img-col">
                  <img src={Shop_TwentyFour} width="100%" className="small-img" alt="" />
                </div>
                <div className="small-img-col">
                  <img src={Shop_TwentyFive} width="100%" className="small-img" alt="" />
                </div>
                <div className="small-img-col">
                  <img src={Shop_TwentySix} width="100%" className="small-img" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <h6>Home / T-Shirt</h6>
              <h3 className="py-4"> <b>Men's Fashion T Shirt</b></h3>
              <h2>$139.00</h2>
              <select className="my-3">
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
              </select>
              <input type="number" defaultValue={1} />
              <button className="buy-btn">Add to Cart</button>
              <h4 className="mt-5 mb-5">Product Details</h4>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatum numquam ea fuga placeat,
                quam atque vel nesciunt repellat quisquam eaque quidem qui molestiae vitae laboriosam reprehenderit
                magnam impedit voluptatem aut temporibus repellendus dicta amet id ab. Voluptatibus quis deserunt at
                rerum aut, consequuntur nostrum ab et facere sunt distinctio?</span>
            </div>
          </div>
        </section>
        <section id="featured" className="my-5 pb-5">
          <div className="container text-center mt-5 py-5">
            <h3><b>Related Products
                <hr className="mx-auto" />
              </b></h3></div><b>
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
          </b></section><b>
            </b>
    </>
  )
}
export default productsDetails