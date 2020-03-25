import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import {connect} from 'react-redux'

class ProductListPage extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        <button type="button" className="btn btn-info mb-10">Thêm sản phẩm</button>


        <ProductList products={this.props.products}/>

      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    products:state.products
  }
}

export default connect(mapStateToProps,null)(ProductListPage);
