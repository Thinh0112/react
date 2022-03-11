import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card">
        <img src={sp.hinhAnh} alt="..." height={300} />
        <div className="card-body text-white bg-dark">
          <p>{sp.tenSP}</p>
          <p>{sp.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.hamXemChiTiet(sp);
            }}
          >
            Xem chi tiết
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => {
              this.props.themGioHang(sp);
            }}
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
