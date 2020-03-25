import React, { Component } from 'react';
import '../../App.css';

class ProductItem extends Component {
    
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
                    <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
