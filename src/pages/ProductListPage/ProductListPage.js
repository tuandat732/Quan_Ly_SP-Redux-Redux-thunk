import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import {connect} from 'react-redux'
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom';
import * as actions from '../../actions/index'

class ProductListPage extends Component {

  componentDidMount(){
    this.props.fetchAllProducts()
  }

  onFetchProducts=()=>{
    callApi('products',"GET",null).then(res=>{
      this.props.fetchAllProducts()
    })
  }

  onDelete=(id)=>{
   this.props.onDeleteProduct(id)
  }

  render() {
    const {products}=this.props
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to='/product/add' className="btn btn-info mb-10">Thêm sản phẩm</Link>
        {/* <ProductList products={this.props.products}/> */}
        <ProductList products={products} onDelete={this.onDelete}/>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    products:state.products
  }
}

const mapDispatchToProps = (dispatch,props)=>{
  return{
    fetchAllProducts:()=>dispatch(actions.actFetchProductsRequest()),
    onDeleteProduct:(id)=>dispatch(actions.actDeleteProductRequest(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductListPage);
