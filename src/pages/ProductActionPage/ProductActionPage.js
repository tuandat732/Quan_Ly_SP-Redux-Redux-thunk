import React, { Component } from 'react';
import callApi from '../../utils/apiCaller'
import { Link } from 'react-router-dom';

class ProductActionPage extends Component {

  state={
    id:'',
    name:'',
    price:'',
    status:false,
  }

  componentDidMount(){
    let {match}= this.props;
    if(match){
      const id = match.params.id;
      callApi(`products/${id}`,"GET",null).then(res=>{
        this.setState({
          ...res.data
        })
      })
    }
  }

  onChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  onSave=(e)=>{
    e.preventDefault();
    if(this.state.id){
      callApi(`products/${this.state.id}`,"PUT",{
        ...this.state
      }).then(()=>{
        this.props.history.goBack()
      })
    }else{
    callApi('products',"POST",{
      name:this.state.name,
      price:this.state.price,
      status:this.state.status
    }).then(res=>{
      this.props.history.goBack()
    })
  }
  }

  render() {
    return (
        
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <form onSubmit={this.onSave}>
            <legend>{this.state.id?"Sửa sản phẩm":"Thêm sản phẩm"}</legend>
            
              <div className="form-group">
                <label>Tên sản phẩm: </label>
                <input type="text" className="form-control" name='name' value={this.state.name} onChange={this.onChange}/>
              </div>
              <div className="form-group">
                <label>Giá: </label>
                <input type="text" className="form-control" name="price" value={this.state.price} onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label>Trạng thái: </label>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" checked={this.state.status} name='status' value={this.state.status} onChange={this.onChange}/>
                    Còn hàng
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mr-10">Lưu lại</button>
              <Link to='/products' className="btn btn-primary">Trở lại</Link>
            </form>
            
          </div>
        </div>
        
    );
  }
}

export default ProductActionPage;
