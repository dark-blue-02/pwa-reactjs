import axios from 'axios'

export const authenticationApi = {
    baseUrl: "https://stg.sso.fafu.com.vn/auth/realms/VIMC/protocol/openid-connect",
    /**
     * @param {string} [username]
     * @param {string} [password]
     */
    async getAuthTokens(username, password) {
        const response = await axios
            .post(`${this.baseUrl}/token`, {
            client_id: "vimc",
            username: username,
            password: password,
            grant_type: "password",
            scope: "openid",
        }, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" }
        });

        return {
            access_token: response.data.access_token,
            refresh_token: response.data.refresh_token,
            expires_in: response.data.expires_in,
            refresh_expires_in: response.data.refresh_expires_in,
            token_type: response.data.token_type,
        }
    }
}
