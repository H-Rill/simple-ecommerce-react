import { Component } from "react";

import React from "react";

const Counter = (props) => {
  const formatText = () => {
    if (props.counter.value > 0) {
      return props.counter.value;
    }
    return "0";
  };

  const getClassNames = () => {
    if (props.counter.value > 0) {
      return "badge bg-primary mx-1";
    }
    return "badge bg-warning text-dark mx-1";
  };

  const {title, price, img} = props.counter;

  return (
    <div className="m-4">
      <div className="card px-2" style={{ width: "18rem" }}>
        <img
          src={props.counter.image}
          className="card-img-top"
          alt="Product"
          style={{ height: "340px", width: "auto" }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.counter.title}</h5>
          <p className="card-text text-danger">₱{props.counter.price}</p>
          <p className="card-text fw-light">{props.counter.description}</p>
          <div className="d-flex justify-content-center">
            {props.counter.value < 1 &&(
              <a className="btn btn-primary" onClick={() => {props.onIncrement(props.counter.id);
                props.handleClick(props.counter);
              }}>
              Add to Cart
            </a>
            )}
          </div>
          {props.counter.value> 0 && (
            <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-primary ms-1"
              disabled={props.counter.value <= 0}
              onClick={() => props.onDecrement(props.counter.id)}>
              -
            </button>
            <span className={getClassNames()}>{formatText()}</span>
            <button
              className="btn btn-primary ms-1"
              onClick={() => props.onIncrement(props.counter.id)}>
              +
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Counter;
