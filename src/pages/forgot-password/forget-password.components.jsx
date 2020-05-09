import React from "react";
import API from "../../api/baseURL";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { recoverPasswordStart } from "../../redux/user/user.action";
import {
  selectRecoverLoading,
  selectRecoverError,
} from "../../redux/user/user.selector";

import {
  email,
  required,
  emailNotFound,
} from "../../util/checkValidate.components";

import "./forget-password.styles.scss";

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      user: "",
      show: false,
    };
  }

  componentDidMount() {
    API.get("user").then((res) => this.setState({ user: res.data }));
    document.title = this.props.title;
  }

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    const { email } = this.state;
    const { recoverPasswordStart } = this.props;

    if (this.checkBtn.context._errors.length === 0) {
      recoverPasswordStart(email);
      this.setState({
        show: true,
      });
    }
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  displayMessage = () => {
    const { error } = this.props;
    const { show } = this.state;
    if (show) {
      return error === false ? (
        <div className="alert alert-success">Gửi email thành công</div>
      ) : (
        <div className="alert alert-danger">{email}</div>
      );
    }
  };

  render() {
    const { user } = this.state;
    const { loading } = this.props;
    return (
      <React.Fragment>
        <section id="hero" className="login">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                <div id="login">
                  <div className="text-center">
                    <img
                      src="img/logo_midway_sticky.png"
                      alt="logo sticky"
                      data-retina="true"
                    />
                  </div>
                  <hr />
                  <Form
                    onSubmit={(e) => this.onSubmit(e)}
                    ref={(c) => {
                      this.form = c;
                    }}
                  >
                    <div className="form-group">
                      <label>Vui lòng xác nhận email đăng nhập bên dưới</label>
                      <Input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Nhập email của bạn"
                        user={user}
                        onChange={this.onChangeHandler}
                        validations={[required, email, emailNotFound]}
                      />
                      <i className="icon_mail_alt" />
                    </div>
                    <p>
                      Bạn sẽ nhận một email chứa liên kết cho phép bạn cập nhật
                      lại mật khẩu.
                    </p>
                    <button type="submit" className="btn_full">
                      {loading ? "Đang gửi email..." : "Gửi email"}
                    </button>
                    {this.displayMessage()}
                    <CheckButton
                      style={{ display: "none" }}
                      ref={(c) => {
                        this.checkBtn = c;
                      }}
                    />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

{
  /* <div id="forgot_pw">
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
              </div> */
}

const mapStateToProps = createStructuredSelector({
  loading: selectRecoverLoading,
  error: selectRecoverError,
});

const mapDisptachToProps = (dispatch) => ({
  recoverPasswordStart: (email) => dispatch(recoverPasswordStart(email)),
});

export default connect(mapStateToProps, mapDisptachToProps)(ForgotPassword);
