import React, { Component } from "react";

export default class Product extends Component {
  render() {
      let {product} = this.props;
    return (
      <div className="card">
        <img src={product.image} alt="..." />
        <div className="card-body">
          <p>Tên sản phẩm: {product.name}</p>
          <p>Giá: {product.price}</p>
          <button
            className="btn text-white"
            style={{ backgroundColor: "#000000" }}
          >
            Mua ngay
          </button>
        </div>
      </div>
    );
  }
}
