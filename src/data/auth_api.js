import axios from 'axios'

export const AuthenticationApi = {
    baseUrl: "https://stg.sso.fafu.com.vn/auth/realms/VIMC/protocol/openid-connect",
    async getAuthTokens() {
        const response = await axios.post(`${this.baseUrl}/token`, {
            client_id: "vimc",
            username: "admin_vpdt",
            password: "123!@#",
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
