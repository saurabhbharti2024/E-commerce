import React, { useState } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  console.log(state);
  return (
    <div>
      <Header />
      <div className="container py-5">
        <div className="row py-5">
          {state.map((state) => {
            return (
              <>
                <div className="col-md-6 my-3 py-4" style={{ background: "#f7f3f3" }}>
                  <img src={state.image} alt={state.title} height="300px" width="400px" />
                </div>
                <div className="col-md-6 my-3 py-4" style={{ background: "#f7f3f3" }}>
                  <h1 className="display-5">{state.title}</h1>
                  <div className="d-flex" style={{ justifyContent: "space-between" }}>
                    <h4 className="text-uppercase text-black-50">$ {state.price}</h4>
                    <h4
                      className={state.rating.rate >= 3 ? "text-uppercase text-success" : "text-uppercase text-danger"}
                    >
                      <p className="lead fw-bolder">
                        Rating {state.rating.rate} <i className="fa fa-star"></i>
                      </p>
                    </h4>
                  </div>

                  <h3>Description</h3>
                  <p>{state.description}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
