import React from 'react';
import { connect } from 'react-redux';
import CartItems from '../components/CartItems';
class Cart extends React.Component{
    render(){
        const { cartData } = this.props;
        if (!cartData) return <p> <h3> Cart is Empty </h3></p>
        return(
            <table>
                <tbody>
                {
                    cartData.map(
                        item =>
                        <CartItems
                        item = {item}
                        key = {item.productId} />
                    )
                }
                </tbody>
            </table>
        );
    }
}

// display the cart data in cart page
const mapStateToProps = (state) =>({
    cartData: state.cart
});
export default connect(mapStateToProps)(Cart);
