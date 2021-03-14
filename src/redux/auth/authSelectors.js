// username;
const userNameSelector = (state) => state.auth.user.name;
const userAuthenticatedSelector = (state) => state.auth.token;

const authSelectors = { userNameSelector, userAuthenticatedSelector };

export default authSelectors;
