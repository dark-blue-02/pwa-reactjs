import { tokenLocalStorage } from "../../data";

export const bearerToken = `Bearer ${tokenLocalStorage.getToken()}`