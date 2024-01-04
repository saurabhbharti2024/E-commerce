import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import Header from "./Header";
const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(data);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await res.clone().json());
        setFilter(await res.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} width={299} />
        </div>
      </>
    );
  };
  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5  overflow-auto ">
          <Button variant="outline-dark" className="me-2 text-nowrap" onClick={() => setFilter(data)}>
            All
          </Button>
          <Button variant="outline-dark" className="me-2 text-nowrap" onClick={() => filterProduct("men's clothing")}>
            Men's Clothing
          </Button>
          <Button variant="outline-dark" className="me-2 text-nowrap" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </Button>
          <Button variant="outline-dark" className="me-2 text-nowrap" onClick={() => filterProduct("jewelery")}>
            Jewelery
          </Button>
          <Button variant="outline-dark" className="me-2 text-nowrap" onClick={() => filterProduct("electronics")}>
            Electronics
          </Button>
        </div>
        {filter.map((Item) => {
          return (
            <div className="col-md-3 mb-4" key={Item.id}>
              <Card className="text-center p-4">
                <Card.Img variant="top" style={{ height: "250px" }} src={Item.image} />
                <Card.Body>
                  <Card.Title>{Item.title.substring(0, 12)}</Card.Title>
                  <p>${Item.price}</p>
                  <Link to={`/products/${Item.id}`}>
                    <Button variant="outline-dark">Buy Now</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <Header />
      <div className="container my-5 py-5 ">
        <div className="row ">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center ">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center ">{loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  );
};

export default Products;
