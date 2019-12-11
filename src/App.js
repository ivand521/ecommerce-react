import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Products from './components/products/Products';
import ProductPage from './components/products/ProductPage';
import FAQ from './components/FAQ/FAQ';
import Cart from './components/cart/Cart';
import './App.css';

import products from './utils/products';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/faq' component={FAQ} />
          <Route path='/cart' component={Cart} />

          {products.map(({ title, route, price, image }) => (
            <Route
              key={title}
              path={`/${route}`}
              render={() => (
                <ProductPage image={image} title={title} price={price} />
              )}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
