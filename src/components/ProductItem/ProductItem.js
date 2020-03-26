import React, { Component } from 'react';
import '../../App.css';
import callApi from '../../utils/apiCaller'

class ProductItem extends Component {

    onDelete=()=>{
        if(confirm("bạn chắc chắn muốn xóa hay không")){ //eslint-disable-line
            this.props.onDelete(this.props.product.id)
        }
    }
    
    render() {
        const {product,index} = this.props;
        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                <span className={product.status?"label label-warning":"label label-default"}>{product.status?"Còn hàng":"Hết hàng"}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success mr-10">Sửa</button>
                    <button type="button" className="btn btn-danger" onClick={this.onDelete}>Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
