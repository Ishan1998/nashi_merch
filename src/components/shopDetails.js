import React from 'react'
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
            <div onclick="window.location.href='products.html';" className="product text-center col-lg-3 col-md-4 col-12">
              <img className="img-fluid mb-3" src="img/shop/1.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/2.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/3.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/6.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/5.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/4.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/7.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/9.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/8.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/22.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/11.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/12.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/13.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/14.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/15.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/16.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/17.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/18.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/19.jpg" alt="" />
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
              <img className="img-fluid mb-3" src="img/shop/20.jpg" alt="" />
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