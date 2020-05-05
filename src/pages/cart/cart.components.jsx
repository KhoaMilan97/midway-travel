import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";

import Summary from "../../components/summary/summary.components";

const Cart = ({ cartItems }) => {
  return (
    <React.Fragment>
      <section id="hero_2">
        <div className="intro_title">
          <h1>Place your order</h1>
          <div className="bs-wizard row">
            <div className="col-4 bs-wizard-step active">
              <div className="text-center bs-wizard-stepnum">Your cart</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <span className="bs-wizard-dot" />
            </div>
            <div className="col-4 bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Your details</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <span className="bs-wizard-dot" />
            </div>
            <div className="col-4 bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Finish!</div>
              <div className="progress">
                <div className="progress-bar" />
              </div>
              <span className="bs-wizard-dot" />
            </div>
          </div>
          {/* End bs-wizard */}
        </div>
        {/* End intro-title */}
      </section>
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Category</a>
              </li>
              <li>Page active</li>
            </ul>
          </div>
        </div>
        {/* End position */}
        <div className="container margin_60">
          <div className="row">
            <div className="col-lg-8">
              <table className="table table-striped cart-list add_bottom_30">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Discount</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(cartItem => (
                    <tr key={cartItem.id}>
                      <td>
                        <div className="thumb_cart">
                          <img
                            src={`/img/tour/${cartItem.image}`}
                            alt="cart_img"
                          />
                        </div>
                        <span className="item_cart">
                          {cartItem.name.slice(0, 30)}...
                        </span>
                      </td>
                      <td>
                        <div className="numbers-row">
                          <input
                            type="text"
                            id="quantity_2"
                            className="qty2 form-control"
                            name="quantity_2"
                            defaultValue="1"
                          />
                        </div>
                      </td>
                      <td>0%</td>
                      <td>
                        <strong>€0,0</strong>
                      </td>
                      <td className="options">
                        <a href="/">
                          <i className=" icon-trash" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="add_bottom_15">
                <small>* Prices for person.</small>
              </div>
            </div>
            {/* End col */}
            <aside className="col-lg-4">
              <Summary cartItems={cartItems} />
              <div className="box_style_4">
                <i className="icon_set_1_icon-57" />
                <h4>
                  Need <span>Help?</span>
                </h4>
                <a href="tel://004542344599" className="phone">
                  +45 423 445 99
                </a>
                <small>Monday to Friday 9.00am - 7.30pm</small>
              </div>
            </aside>
            {/* End aside */}
          </div>
          {/*End row */}
        </div>
        {/*End container */}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(Cart);
