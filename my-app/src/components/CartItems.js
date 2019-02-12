import React from 'react';

class CartItems extends React.Component{
    state = { qty:1 };
    render(){
        const { item } = this.props;
        return(
            <tr key={item.productId}>
                <td>{item.productName}</td>
                <td>{item.productPrice}</td>
                <td>
                   <input type="number" onChange={(e)=>this.setState({qty: e.currentTarget.value})}></input>
                </td>
                <td>{item.productPrice * this.state.qty}</td>
            </tr>
        );
    }
}

export default CartItems;