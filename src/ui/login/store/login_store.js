import { authenticationRepository } from "../../../repository";
import { makeObservable, observable, action } from "mobx"
import { delay } from "../../../utils";

export default class LoginStore {
    repository = authenticationRepository
    bearerToken = ""
    /**
     * @type {'loading' | 'error' | 'success' | 'unknown'}
     */
    loginState = 'unknown'

    constructor() {
        makeObservable(this, {
            bearerToken: observable,
            getToken: action,
        })
    }

    /**
     * @param {string} [username]
     * @param {string} [password]
     */
    async getToken(username, password) {
        this.loginState = 'loading'
        const token = await this.repository.getAuthTokens({ username, password })
        await delay(1000);
        if (token?.bearerToken != null) {
            this.loginState = 'success'
            this.bearerToken = token.bearerToken
            return
        }

        this.loginState = 'error'
    }

}
