import React from "react";
import Blog_One from '../assets/img/blog/Blog_One.jpg'
import Blog_One_Webp from '../assets/img/blog/Blog_One.webp'
import Blog_Two from '../assets/img/blog/Blog_Two.jpg'
import Blog_Two_Webp from '../assets/img/blog/Blog_Two.webp'
import Blog_Three from '../assets/img/blog/Blog_Three.jpg'
import Blog_Three_Webp from '../assets/img/blog/Blog_Three.webp'
import Blog_Four from '../assets/img/blog/Blog_Four.jpg'
import Blog_Four_Webp from '../assets/img/blog/Blog_Four.webp'
import Blog_Five from '../assets/img/blog/Blog_Five.jpg'
import Banner from '../assets/img/blog/banner.webp'
const blogDetails = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Blogs</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v6.1.2/css/all.css"
        integrity="sha384-fZCoUih8XsaUZnNDOiLqnby1tMJ0sE7oBbNk2Xxf5x8Z4SvNQ9j83vFMa/erbVrV"
        crossOrigin="anonymous"
      />
      <section id="blog-home" className="pt-5 mt-5 container ">
        <h2 className="font-weight-bold pt-5">Blogs</h2>
        <hr />
      </section>
      <section id="blog-container" className="container pt-5">
        <div className="row">
          <div className="post col-lg-6 col-md-6 col-12">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_One} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-3">
              The best ways to change your summer wardrobe into autum wardrobe.
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="post col-lg-6 col-md-6 col-12">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_Two} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-5">
              The best ways to change your summer wardrobe into autum wardrobe.
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="post col-lg-6 col-md-6 col-12">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_Three} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-5">
              The best ways to change your summer wardrobe into autum wardrobe.
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="post col-lg-6 col-md-6 col-12">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_Four} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-5">
              The best ways to change your summer wardrobe into autum wardrobe.
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="col-lg-12 col-md-12 col-12">
            <div className="post-img">
              <img
                className="img-fluid w-100"
                src={Banner}
                alt=""
              />
            </div>
          </div>
          <div className="post col-lg-4 col-md-6 col-12 pt-5">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_One_Webp} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-3">
              The best ways to change your summer wardrobe into autum wardrobe.
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="post col-lg-4 col-md-6 col-12 pt-5">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_Three_Webp} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-3">
              Lenovo's smarter devices stoke professional passions
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
          <div className="post col-lg-4 col-md-6 col-12 pt-5">
            <div className="post-img">
              <img className="img-fluid w-100" src={Blog_Two_Webp} alt="" />
            </div>
            <h3 className="text-center font-weight-normal pt-3">
              Take a 3D tour through a Microsoft datacenter
            </h3>
            <p className="text-center">August 31, 2022</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default blogDetails;
