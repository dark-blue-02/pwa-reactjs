import { authenticationRepository } from "../../../repository";
import { makeObservable, observable, action } from "mobx"
import { DataState, delay } from "../../../utils";

export default class LoginStore {
    repository = authenticationRepository
    bearerToken = ""
    loginState = DataState.unknown

    constructor() {
        makeObservable(this, {
            loginState: observable,
            bearerToken: observable,
            getTokenThenSaveIt: action,
        })
    }

    /**
     * @param {string} [username]
     * @param {string} [password]
     */
    async getTokenThenSaveIt(username, password) {
        this.loginState = DataState.loading
        await delay(500)
        const token = await this.repository.getAuthTokensThenSaveIt({ username, password })
        if (token?.bearerToken != null) {
            this.loginState = DataState.success
            this.bearerToken = token.bearerToken
            return
        }

        this.loginState = DataState.error
    }

}
