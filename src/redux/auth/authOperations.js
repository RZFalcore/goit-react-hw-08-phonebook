import axios from "axios";
import authActions from "./authActions";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const registration = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/users/signup", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch((err) => dispatch(authActions.registerError(err.message)));
};

const login = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/users/login", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.loginSuccess(res.data));
    })
    .catch((err) => dispatch(authActions.loginError(err.message)));
};

const logout = () => (dispatch) => {
  dispatch(authActions.logoutRequest());

  axios
    .post("/users/logout")
    .then((res) => {
      token.unset();
      dispatch(authActions.logoutSuccess());
    })
    .catch((err) => dispatch(authActions.logoutError(err.message)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  axios
    .get("/users/current")
    .then((res) => dispatch(authActions.getCurrentUserSuccess(res.data)))
    .catch((err) => dispatch(authActions.getCurrentUserError(err.message)));
};

const authOperations = { registration, login, logout, getCurrentUser, token };

export default authOperations;
