import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  googleSignInStart,
  signInWithEmail,
} from "../../redux/user/user.action";
import {
  selectUserLoading,
  selectUserError,
} from "../../redux/user/user.selector";

import "./sign-in.styles.scss";

function FormError(props) {
  if (props.isHidden) {
    return null;
  } else {
    return <div className="message">{props.errorMessage}</div>;
  }
}

export const validateInput = (type, checkingText) => {
  if (type === "email") {
    const regexp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const checkResult = regexp.test(checkingText);
    if (checkResult) {
      return {
        isInputValid: true,
        errorMessage: "",
        isValid: true,
      };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Email của bạn không đúng dạng",
        isValid: false,
      };
    }
  }
  if (type === "password") {
    if (checkingText.length < 8) {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu cần ít nhất 8 kí tự",
        isValid: false,
      };
    } else {
      return {
        isInputValid: true,
        errorMessage: "",
        isValid: true,
      };
    }
  }
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: {
        value: "",
        isInputValid: true,
        errorMessage: "",
        isValid: false,
      },
      password: {
        value: "",
        isInputValid: true,
        errorMessage: "",
        isValid: false,
      },
      showMess: false,
    };
  }

  componentDidMount() {
    document.title = this.props.title;
  }

  handleInputValidation = (event) => {
    const { name } = event.target;
    const { isInputValid, errorMessage, isValid } = validateInput(
      name,
      this.state[name].value
    );
    const newState = { ...this.state[name] }; /* dummy object */
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    newState.isValid = isValid;
    this.setState({ [name]: newState });
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    const newState = { ...this.state[name] };
    newState.value = value;
    this.setState({
      [name]: newState,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const { signInWithEmail } = this.props;

    signInWithEmail(email.value, password.value);
  };

  displayMessage = () => {
    const { error } = this.props;

    // if (showMess) {
    //   return error !== false ? (
    //     <div className="alert alert-danger">{error}</div>
    //   ) : null;
    // }
    if (error !== null) {
      return <div className="alert alert-danger">{error}</div>;
    }
    return error;
  };

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    const { googleSignInStart, loading } = this.props;
    const { email, password } = this.state;

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
                  <form onSubmit={this.handleSubmit}>
                    {/* <button
                      onClick={facebookSignInStart}
                      type="button"
                      className="social_bt facebook"
                    >
                      Đăng nhập bằng Facebook
                    </button> */}
                    <button
                      onClick={googleSignInStart}
                      type="button"
                      className="social_bt google"
                    >
                      Đăng nhập bằng Google
                    </button>
                    <div className="divider">
                      <span>Hoặc</span>
                    </div>
                    {this.displayMessage()}
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        className=" form-control "
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={email.value}
                        onBlur={this.handleInputValidation}
                      />
                      <FormError
                        type="email"
                        isHidden={email.isInputValid}
                        errorMessage={email.errorMessage}
                      />
                    </div>

                    <div className="form-group">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        name="password"
                        className=" form-control"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={password.value}
                        onBlur={this.handleInputValidation}
                      />
                      <FormError
                        type="password"
                        isHidden={password.isInputValid}
                        errorMessage={password.errorMessage}
                      />
                    </div>

                    <button type="submit" className="btn_full">
                      {loading ? "Đang Đăng nhập..." : "Đăng nhập"}
                    </button>
                    <Link to="/forgot-password" className="lost-password">
                      <span>*Quên mật khẩu?</span>
                    </Link>
                    <Link to="/sign-up" className="btn_full_outline">
                      Đăng kí
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
  loading: selectUserLoading,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(signInWithEmail({ email, password })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
