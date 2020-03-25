import React, { Component } from 'react';

class ProductActionPage extends Component {
  render() {
    return (
        
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            
            <form action="" method="POST" role="form">
              <legend>Form title</legend>
            
              <div className="form-group">
                <label>Tên sản phẩm: </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Giá: </label>
                <input type="text" className="form-control" />
              </div>
              <div className="form-group">
                <label>Trạng thái: </label>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" value=""/>
                    Còn hàng
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Lưu lại</button>
            </form>
            
          </div>
        </div>
        
    );
  }
}

export default ProductActionPage;
