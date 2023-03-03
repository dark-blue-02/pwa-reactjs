import { DateTime, Result } from "..";
import { tokenLocalStorage } from "../../data";
import { authenticationRepository } from "../../repository";

export const savedBearerToken = `Bearer ${tokenLocalStorage.getToken().token}`

export function isTokenExpired() {
    const token = tokenLocalStorage.getToken().token
    if (token == null) {
        return true
    }
    const expiredDate = new Date(Number(tokenLocalStorage.getToken().expiredDate))
    if (DateTime.compare(
        new Date(),
        DateTime.subtractHours({ date: expiredDate, hours: 1 }))
        === -1
    ) return false;

    return true;
}

export async function refreshTokenIfExpired() {
    if (isTokenExpired()) {
        const currentUserInfo = tokenLocalStorage.getUserInfo()
        const response = await authenticationRepository.getAuthTokens({
            username: currentUserInfo.username,
            password: currentUserInfo.password,
        })
        if (response == null) {
            return Result.failed
        }

        if (currentUserInfo.username != null && currentUserInfo.password != null)
            tokenLocalStorage.saveToken(currentUserInfo.username,
                currentUserInfo.password,
                response.bearerToken,
                DateTime
                    .addHours({ date: new Date(), hours: response.expires_in / 3600 })
                    .getMilliseconds()
            )
    }
    return Result.success
}