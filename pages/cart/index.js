import { useRouter } from 'next/router';
import React, {Component, useContext} from 'react';
import { Box } from 'rebass';
import { ShopContext } from '../../context/ShopContext';
import LineItem from '../../components/LineItem';

function Cart(){
  function openCheckout() {
    window.location.assign(checkout.webUrl)
  }
    const {checkout, isCartOpen, closeCart} = useContext(ShopContext);

    let lineItems = checkout && checkout.lineItems && checkout.lineItems.map((item) => {
      return (
        <LineItem
          key={item.id.toString()}
          line_item={item}
        />
      );
    });

    return (
        <div onClick={(e) => e.stopPropagation()} className={`Cart ${isCartOpen ? 'Cart--open' : ''}`}>
        <header className="Cart__header">
          <h2>Your cart</h2>
          {/* <button
            onClick={handleCartClose}
            className="Cart__close">
            ×
          </button> */}
        </header>
        <ul className="Cart__line-items">
          {lineItems}
        </ul>
        <footer className="Cart__footer">
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Subtotal</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkout.subtotalPrice}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Taxes</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkout.totalTax}</span>
            </div>
          </div>
          <div className="Cart-info clearfix">
            <div className="Cart-info__total Cart-info__small">Total</div>
            <div className="Cart-info__pricing">
              <span className="pricing">$ {checkout.totalPrice}</span>
            </div>
          </div>
          <button className="Cart__checkout button" onClick={() => openCheckout()}>Checkout</button>
        </footer>
      </div>
    )
  }

export default Cart;
