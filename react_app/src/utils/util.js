const tokenKey = "token";

/**
 * Get login status.
 */
const isLogined = () => localStorage.getItem(tokenKey) !== null;

/**
 * Store authentication
 * @param {String} token Token
 */
const storeToken = token => localStorage.setItem(tokenKey, token);

const getToken = () => localStorage.getItem(tokenKey);

export default {
    isLogined,
    getToken,
    storeToken,
};
