import React from 'react';
import Product from '../components/Product';
import * as _ from 'lodash';
import { connect } from 'react-redux';
import { Pagination } from './Pagination';
import { addToCart} from '../_store/actions/cartAction';

class ProductList extends React.Component{
    state = { pList: [],page:1 };
    componentDidMount(){
        this.getData();
    }
    getData(){
        const url=`https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json`
        //Ajax request using fetch method
        fetch(url).then(
            response => response.json()
        ).then(
            data =>{ 
                const list = _.chunk(data, 10);
                // console.log(list);
                this.setState({ pList: data })}
        ).catch(
            err => console.log('error',err)
        );
    }
    render(){
        console.log(this.props);
        // const { data,sendToApp } = this.props;
        const list = Pagination(this.state.pList,this.state.page);
        return(
            //If one product is there 
            // <Product pData = {pList} />
            // Array of Products and pList is a state variable
            <div>
                {
                    list.map(
                        (p) => <Product
                                cCode={this.props.code}
                                pData={p} key={p.productId}
                                // addToCart = {(data) => this.state.sendToApp(data)} this is used when no route
                                // when use route
                                addToCart = {(data) => {
                                    this.props.addToCart(data);
                                    // this.props.history.push('/cart')
                                    }
                                } 
                            />
                    )
                }
            <br/>

                <button onClick={() =>this.setState({page:--this.state.page})}>Previous</button>
                <button onClick={() =>this.setState({page:++this.state.page})}>Next</button>
            </div>
        );
    }
}

// declaration
const mapStateToProps = (state) =>({
    code: state.code
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (p) => dispatch(addToCart(p))
});

// connect(how to connect)(component to connect)
export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

