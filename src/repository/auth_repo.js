import { authenticationApi, tokenLocalStorage } from "../data";

export const authenticationRepository = {
    api: authenticationApi,
    async getAuthTokens({username, password}) {
        try {
            const data = await this.api.getAuthTokens(username, password);
            console.log(`Bearer token: ${data}`);
            tokenLocalStorage.saveToken(username, password, data.access_token);
            return { bearerToken: data.access_token, expiredIn: data.expires_in }
        } catch (error) {
            console.error(error)
            return null
        }
    }
}
