import { DateTime, Result } from "..";
import { userLocalStorage } from "../../data";
import { authenticationRepository } from "../../repository";

export const savedBearerToken = `Bearer ${userLocalStorage.getToken().token}`

export function isTokenExpired() {
    const token = userLocalStorage.getToken().token
    if (token == null) {
        return true
    }

    const expiredDate = new Date(Number(userLocalStorage.getToken().expiredDate))
    if (DateTime.compare(
        new Date(),
        DateTime.subtractHours({ date: expiredDate, hours: 1 }))
        === -1
    ) {
        return false
    }

    return true
}

export async function refreshTokenIfExpired() {
    if (isTokenExpired()) {
        const currentUserInfo = userLocalStorage.getUserInfo()
        const response = await authenticationRepository.getAuthTokensThenSaveIt({
            username: currentUserInfo.username,
            password: currentUserInfo.password,
        })
        if (response == null) {
            return Result.failed
        }
    }
    return Result.success
}