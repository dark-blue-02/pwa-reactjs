export const userLocalStorage = {
    _username: "username",
    _password: "password",
    _token: "token",
    _expiredDate: "expiredDate",
    /**
     * @param {string} username
     * @param {string} password
     * @param {string} token
     * @param {number} expiredDate
     */
    saveToken(username, password, token, expiredDate) {
        localStorage.setItem(this._username, username);
        localStorage.setItem(this._password, password);
        localStorage.setItem(this._token, token);
        localStorage.setItem(this._expiredDate, expiredDate.toString());
    },

    getToken() {
        return {
            token: localStorage.getItem(this._token),
            expiredDate: localStorage.getItem(this._expiredDate),
        }
    },

    getUserInfo() {
        return {
            username: localStorage.getItem(this._username),
            password: localStorage.getItem(this._password),
        }
    },

    deleteUserInfo() {
        localStorage.removeItem(this._username)
        localStorage.removeItem(this._password)
        localStorage.removeItem(this._token)
        localStorage.removeItem(this._expiredDate)
    },

    makeTokenExpired() {
        localStorage.setItem(
            this._expiredDate,
            new Date().getMilliseconds().toString()
        )
    },
}