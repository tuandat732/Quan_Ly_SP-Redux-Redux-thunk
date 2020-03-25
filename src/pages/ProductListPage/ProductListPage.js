import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'

class ProductListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        <button type="button" class="btn btn-info mb-10">Thêm sản phẩm</button>


        <ProductList/>

      </div>
    );
  }
}

export default ProductListPage;
