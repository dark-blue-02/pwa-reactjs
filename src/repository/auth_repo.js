import { authenticationApi, userLocalStorage } from "../data";
import { DateTime } from "../utils";

export const authenticationRepository = {
    api: authenticationApi,
    async getAuthTokensThenSaveIt({ username, password }) {
        try {
            const data = await this.api.getAuthTokens(username, password);
            userLocalStorage.saveToken(
                username,
                password,
                data.access_token,
                DateTime
                    .addHours({ date: new Date(), hours: data.expires_in / 3600 })
                    .getTime(),
            );
            return { bearerToken: data.access_token, expiredIn: data.expires_in }
        } catch (error) {
            console.error(error)
            return null
        }
    }
}
