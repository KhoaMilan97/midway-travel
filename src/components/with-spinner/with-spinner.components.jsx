import React from "react";

import SpinnerComponnet from "../spinner/spinner.components";

const WithSpinner = (WrappedCompoents) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerComponnet />
    ) : (
      <WrappedCompoents {...otherProps} />
    );
  };
  return Spinner;
};
export default WithSpinner;
