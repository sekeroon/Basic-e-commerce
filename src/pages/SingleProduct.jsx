import React from "react";
import PRODUCTS from "./Data";
import { Link, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate();

  const singleProduct = PRODUCTS.find(
    (product) => product.id === parseInt(product.id)
  );

  const { name, price, image, details } = singleProduct;

  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            <div className="col-lg-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/products">Products</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {name}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price">
              <p>{price}</p>
            </p>
            <p>{details}</p>
            <br />
            <button
              className="btn btn-primary btn-sm"
              onClick={() => navigate(-1)}
            >
              BACK
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
