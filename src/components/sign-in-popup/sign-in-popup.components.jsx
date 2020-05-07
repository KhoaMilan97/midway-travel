import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {
  googleSignInStart,
  signInWithEmail,
} from "../../redux/user/user.action";
import {
  selectUserLoading,
  selectUserError,
} from "../../redux/user/user.selector";

import "../../pages/sign-in/sign-in.styles.scss";
import "./sign-in-popup.styles.scss";

const SignInPopUp = ({ signInWithEmail, googleSignInStart, loading }) => {
  const [show, setShow] = useState(false);
  const [signInPopup, setSignInPopup] = useState({
    email: "",
    password: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setSignInPopup({
      ...signInPopup,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = signInPopup;

    signInWithEmail(email, password);
  };

  return (
    <>
      <Button className="text-alert sign-in-with-popup" onClick={handleShow}>
        Đăng nhập
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="zoom-anim-dialog"
        id="sign-in-popup"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>Đăng nhập</h3>
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="sign-in-wrapper">
              <button
                className="social_bt google"
                type="button"
                onClick={googleSignInStart}
              >
                Đăng nhập bằng google
              </button>
              <div className="divider">
                <span>Hoặc</span>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
                <i className="icon_mail_alt" />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  onChange={handleChange}
                />
                <i className="icon_lock_alt" />
              </div>
              <div className="clearfix add_bottom_15">
                {/* <div className="checkboxes float-left">
                  <input id="remember-me" type="checkbox" name="check" />
                  <label htmlFor="remember-me">Remember Me</label>
                </div> */}
                <div className="float-right">
                  <Link to="/forgot-password">Quên mật khẩu?</Link>
                </div>
              </div>
              <div className="text-center">
                <input
                  type="submit"
                  className="btn_login"
                  value={loading ? "Đang Đăng nhập..." : "Đăng nhập"}
                />
              </div>
              <div className="text-center">
                Không có tài khoản? <Link to="/sign-up">Đăng kí</Link>
              </div>
              {/* <div id="forgot_pw">
                <div className="form-group">
                  <label>Please confirm login email below</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email_forgot"
                    id="email_forgot"
                  />
                  <i className="icon_mail_alt" />
                </div>
                <p>
                  You will receive an email containing a link allowing you to
                  reset your password to a new preferred one.
                </p>
                <div className="text-center">
                  <input
                    type="submit"
                    defaultValue="Reset Password"
                    className="btn_1"
                  />
                </div>
              </div> */}
            </div>
          </Modal.Body>
        </form>
      </Modal>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
  loading: selectUserLoading,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(signInWithEmail({ email, password })),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignInPopUp)
);
