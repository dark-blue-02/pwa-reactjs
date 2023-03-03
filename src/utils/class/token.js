import { tokenLocalStorage } from "../../data";

export const savedBearerToken = `Bearer ${tokenLocalStorage.getToken()}`