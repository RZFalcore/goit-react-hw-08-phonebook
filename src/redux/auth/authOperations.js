import axios from "axios";
import authActions from "./authActions";

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
    .post("url", credentials)
    .then((res) => {
      token.set(res.data.token);
      dispatch(authActions.registerSuccess(res.data));
    })
    .catch((err) => dispatch(authActions.registerError(err)));
};

export default { registration };
