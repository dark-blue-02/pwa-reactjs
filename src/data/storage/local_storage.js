export const tokenLocalStorage = {
    username: "username",
    password: "password",
    token: "token",
    /**
     * @param {any} username
     * @param {any} password
     * @param {any} token
     */
    saveToken(username, password, token) {
        localStorage.setItem(this.username, username);
        localStorage.setItem(this.password,password);
        localStorage.setItem(this.token, token);
    },
    getToken() {
        return localStorage.getItem(this.token);
    }
}