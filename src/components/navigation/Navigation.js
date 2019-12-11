import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navigation.css';

const Navigation = ({ cart }) => {
  return (
    <nav className='navigation'>
      <ul className='routes'>
        <li>
          <Link className='route' to='/'>
            <h2>Subliminal Audio Store</h2>
          </Link>
        </li>
        <div className='right'>
          <li>
            <Link className='route' to='/products'>
              Products
            </Link>
          </li>
          <li>
            <Link className='route' to='/faq'>
              FAQ
            </Link>
          </li>
          <li>
            <Link className='route' to='/cart'>
              Cart <span style={{ color: 'green' }}>{cart.length || ''}</span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart
});

export default connect(mapStateToProps)(Navigation);
