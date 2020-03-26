import React, { Component } from 'react';
import '../../App.css';
import ProductItem from '../ProductItem/ProductItem'

class ProductList extends Component {
  render() {
    const {products}= this.props?this.props:[];
    return (
        <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Danh sách sản phẩm</h3>
        </div>
        <div className="panel-body">

          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Giá</th>
                <th>Trạng thái</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product,index)=><ProductItem product={product} onDelete={this.props.onDelete} index={index} key={index}/>)}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

export default ProductList;
