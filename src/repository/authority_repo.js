import { authorityApi } from "../data";
import { Result, refreshTokenIfExpired, savedBearerToken } from "../utils";

export const authoritoryRepository = {
    _authorityApi: authorityApi,
    async getAllAuthorities() {
        const refreshTokenResult = await refreshTokenIfExpired()
        if (refreshTokenResult === Result.failed) {
            return null
        }

        try {
            const data = await this._authorityApi.getIncomingAuthorities({
                bearerToken: savedBearerToken
            })
            return data
        } catch (error) {
            console.error(error)
            return null
        }
    }
}
