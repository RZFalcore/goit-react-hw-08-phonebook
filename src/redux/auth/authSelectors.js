// username;
const userNameSelector = (state) => state.auth.user.name;
const userAuthenticatedSelector = (state) => state.auth.token;

export default { userNameSelector, userAuthenticatedSelector };
