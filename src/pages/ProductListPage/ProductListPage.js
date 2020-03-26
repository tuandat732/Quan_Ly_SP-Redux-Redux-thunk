import React, { Component } from 'react';
import ProductList from '../../components/ProductList/ProductList'
import {connect} from 'react-redux'
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom';

class ProductListPage extends Component {

  state={
    products:[]
  }

  componentDidMount(){
    callApi('products',"GET",null).then(res=>{
      this.setState({
        products:res.data
      })
    })
  }

  render() {

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to='/product/add' className="btn btn-info mb-10">Thêm sản phẩm</Link>
        {/* <ProductList products={this.props.products}/> */}
        <ProductList products={this.state.products}/>
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
