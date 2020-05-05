import { createSelector } from "reselect";

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectUserError = createSelector(
  [selectUser],
  (user) => user.error
);

export const selectUserLoading = createSelector(
  [selectUser],
  (user) => user.loading
);

export const selectRecover = createSelector(
  [selectUser],
  (user) => user.recoverPassword
);

export const selectRecoverLoading = createSelector(
  [selectRecover],
  (recover) => recover.loading
);

export const selectRecoverError = createSelector(
  [selectRecover],
  (recover) => recover.error
);
