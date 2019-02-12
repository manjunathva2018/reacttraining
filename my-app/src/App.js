import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Demo from './Demo';
// import Product from './components/Product';
import ProductList from './containers/ProductList';
import Currency from './components/Currency';
import Cart from './containers/Cart';
import {BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import Error from './components/Error';

class App extends Component {
  state = {
    currencyCode : 'INR',
    cartItems:[]
  };

  addItem(i){
    const items = this.state.cartItems;
    items.push(i);
    this.setState({cartItems:items});
  }
  render() {
    const currencies = ['INR','USD','EUR'];

    return (
      <Router>
        <div className="App">
        {/* <Demo />
        <Product /> */}
        <Currency 
        codes={currencies}
        // sending data from child to parent(currency to App)
        changeCurrency = { (code) => this.setState({currencyCode:code}) }/>
        {/* <Cart cartData = {this.state.cartItems} />   // if we didnt use route we should load manually
        <ProductList code = {this.state.currencyCode}
                  sendToApp = {(item) => this.addItem(item)}/> */}
          <ul>
            <li><Link to="/products/:id">Products</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
          <Switch>
          <Route exact path="/" component={Demo}/> {/* exact is used only for index page  */}
          <Route component={ProductList} path="/products/:id" />
          <Route component={Cart} path="/cart" />
          <Route component={Error} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
