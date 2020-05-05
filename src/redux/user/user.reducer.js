import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
  recoverPassword: {
    loading: false,
    error: null,
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.CLEAN_UP:
      return {
        ...state,
        loading: false,
        error: null,
        recoverPassword: {
          loading: false,
          error: null,
        },
      };
    case userTypes.SIGN_IN_WITH_EMAIL:
    case userTypes.GOOGLE_SIGN_IN_START:
    case userTypes.REGISTER_EMAIL_START:
      return {
        ...state,
        loading: true,
      };
    case userTypes.REGISTER_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: false,
        loading: false,
      };
    case userTypes.SIGN_IN_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
    case userTypes.REGISTER_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case userTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: false,
        loading: false,
      };
    case userTypes.RECOVER_PASSOWRD_START:
      return {
        ...state,
        recoverPassword: { ...state.recoverPassword, loading: true },
      };
    case userTypes.RECOVER_PASSOWRD_SUCCESS:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: false,
        },
      };
    case userTypes.RECOVER_PASSOWRD_FAILURE:
      return {
        ...state,
        recoverPassword: {
          ...state.recoverPassword,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
