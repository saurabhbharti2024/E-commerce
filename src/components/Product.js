import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import Header from "./Header";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addCart(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delCart(product));
      setCartBtn("Add to Cart");
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await res.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt={product.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50"> {product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            {" "}
            Rating {product.rating && product.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3>$ {product.price}</h3>
          <h3>Description</h3>
          <p className="lead">{product.description}</p>
          <Button variant="outline-dark" className="px-4 py-2" onClick={() => handleCart(product)}>
            {cartBtn}
          </Button>
          <Link to="/cart">
            <Button variant="dark" className="ms-2 px-3 py-2">
              Go to Cart
            </Button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
