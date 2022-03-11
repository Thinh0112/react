import React, { Component } from "react";

export default class ChildComponent extends Component {

  render() {
      // this.props là thuộc tính có sẵn của React Class Component dùng để truyền dữ liệu từ component cha sang component con 
      // this.props là thuộc tính readOnly: không thể gán lại được
      let {maSanPham,tenSanPham,gia,hinhAnh} = this.props.product
    return (
      <div className="card">
        <img src={hinhAnh} alt="..." />
        <div className="card-body">
          <p>Tên sản phẩm: {tenSanPham}</p>
          <p>Giá: {gia}</p>
        </div>
      </div>
    );
  }
}
