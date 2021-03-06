// username;
const userNameSelector = (state) => state.user.user.name;
const userAuthenticatedSelector = (state) => state.user.token;

export default { userNameSelector, userAuthenticatedSelector };
