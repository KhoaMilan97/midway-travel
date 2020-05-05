import React from "react";
import { connect } from "react-redux";
import API from "../../api/baseURL";
import { createStructuredSelector } from "reselect";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { registerStart } from "../../redux/user/user.action";
import { selectUserLoading } from "../../redux/user/user.selector";

import {
  isPhone,
  email,
  required,
  rePassowrd,
  minLengthPassword,
  minLengthUsername,
  emailExist,
} from "../../util/checkValidate.components";

import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: "",
      password: "",
      phone: "",
      confirmPassword: "",
      user: "",
    };
  }

  componentDidMount() {
    API.get("user").then((res) => this.setState({ user: res.data }));
    document.title = this.props.title;
  }

  onSubmit(e) {
    e.preventDefault();
    this.form.validateAll();
    const { registerStart } = this.props;
    const { email, displayName, password, phone } = this.state;
    // check if no errors
    if (this.checkBtn.context._errors.length === 0) {
      registerStart(email, password, displayName, phone);
    }
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { user } = this.state;
    const { loading } = this.props;

    return (
      <React.Fragment>
        <main>
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
                        <label>Tên người dùng</label>
                        <Input
                          type="text"
                          className=" form-control"
                          placeholder="Fullname"
                          name="displayName"
                          onChange={this.onChangeHandler}
                          validations={[required, minLengthUsername]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <Input
                          type="email"
                          className=" form-control"
                          placeholder="Email"
                          name="email"
                          onChange={this.onChangeHandler}
                          user={user}
                          validations={[required, email, emailExist]}
                        />
                      </div>

                      <div className="form-group">
                        <label>Số điện thoại</label>
                        <Input
                          type="text"
                          className=" form-control"
                          id="phone"
                          placeholder="Phone number"
                          name="phone"
                          onChange={this.onChangeHandler}
                          validations={[required, isPhone]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Mật khẩu</label>
                        <Input
                          type="password"
                          className=" form-control"
                          id="password1"
                          placeholder="Password"
                          name="password"
                          onChange={this.onChangeHandler}
                          validations={[required, minLengthPassword]}
                        />
                      </div>
                      <div className="form-group">
                        <label>Nhập lại mật khẩu</label>
                        <Input
                          type="password"
                          className=" form-control"
                          id="password2"
                          name="confirmPassword"
                          placeholder="Confirm password"
                          validations={[required, rePassowrd]}
                          repass={this.state.password}
                        />
                      </div>
                      <div id="pass-info" className="clearfix" />
                      <button className="btn_full">
                        {loading ? "Đang đăng ký..." : "Đăng ký"}
                      </button>
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
        </main>
        {/* End main */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectUserLoading,
});

const mapDisptachToProps = (dispatch) => ({
  registerStart: (email, password, displayName, phone) =>
    dispatch(registerStart({ email, password, displayName, phone })),
});

export default connect(mapStateToProps, mapDisptachToProps)(SignUp);
