import React from 'react';

class Product extends React.Component{
    render(){
        const { pData , cCode, addToCart } = this.props;
        return(
            <div>
                <img src={pData.productImage} />
                <h3>{pData.productName}</h3>
                <h4>{cCode} {pData.productPrice}</h4>
                {
                    pData.productStock ?
                    <button  onClick = {() => addToCart(pData)}>Add to Cart</button> :
                    <p> Out of Stock </p>
                }
            </div>
        );
    }
}

export default Product;