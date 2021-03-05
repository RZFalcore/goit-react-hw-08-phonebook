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
    .catch((err) => dispatch(authActions.registerError(err)));
};

export default { registration };
