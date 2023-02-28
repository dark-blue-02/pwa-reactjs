import { authenticationApi } from "../data";

export const authenticationRepository = {
    api: authenticationApi,
    async getAuthTokens() {
        try {
            const data = await this.api.getAuthTokens();
            // return {
            //     bearerToken: data.access_token,
            //     expiredIn: data.expires_in,
            // }
            return { bearerToken: data.access_token, expiredIn: data.expires_in };
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}
