import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selector";

import "./summary.styles.scss";

const Summary = ({ cartItems, title }) => {
  return (
    <div className="box_style_1">
      <h3 className="inner">- {title} -</h3>
      <table className="table table_summary">
        <tbody>
          <tr>
            <td>Người lớn</td>
            <td className="text-right">{cartItems.adult}</td>
          </tr>
          <tr>
            <td>Trẻ em</td>
            <td className="text-right">{cartItems.children}</td>
          </tr>
          <tr>
            <td>{cartItems.name}</td>
            <td className="text-right">
              {cartItems.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </td>
          </tr>
          <tr className="total">
            <td>Thành tiền</td>
            <td className="text-right">
              {cartItems.totalCost.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Summary);
