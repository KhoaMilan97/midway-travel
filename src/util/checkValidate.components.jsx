import React from "react";
import { isEmail, isEmpty, isMobilePhone } from "validator";

import "../pages/sign-up/sign-up.components";

export const required = (value) => {
  if (isEmpty(value)) {
    return <div className="message">Trường này không được để trống</div>;
  }
};

export const email = (value) => {
  if (!isEmail(value)) {
    return <div className="message">Không đúng định dạng email</div>;
  }
};

export const minLengthPassword = (value) => {
  if (value.trim().length < 8) {
    return <div className="message">Mật khẩu cần ít nhất 8 kí tự</div>;
  }
};

export const minLengthUsername = (value) => {
  if (value.trim().length < 6) {
    return <div className="message">Tên người dùng cần ít nhất 6 kí tự</div>;
  }
};

export const isPhone = (value) => {
  if (!isMobilePhone(value, "vi-VN")) {
    return <div className="message">Số điện thoại cần ít nhất 10 kí tự</div>;
  }
};

export const rePassowrd = (value, props) => {
  if (value !== props.repass) {
    return <div className="message">Mật khẩu của bạn không trùng khớp</div>;
  }
};

export function emailExist(value, props) {
  for (let i = 0; i < props.user.length; i++) {
    if (value === props.user[i].email) {
      return <div className="message">Email này đã được sử dụng</div>;
    }
  }
}

export function emailNotFound(value, props) {
  let email = props.user.filter((item) => item.email === value);
  if (email.length === 0) {
    return <div className="message">Email này chưa được sử dụng</div>;
  }
}
