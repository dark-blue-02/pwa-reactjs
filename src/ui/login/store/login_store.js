import { authenticationRepository } from "../../../repository";
import { makeObservable, observable, action } from "mobx"
import { delay } from "../../../utils";

export default class LoginStore {
    repository = authenticationRepository
    bearerToken = ""

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
        this.bearerToken = "loading..."
        const token = await this.repository.getAuthTokens({username, password})
        await delay(1000);
        if (token?.bearerToken != null) {
            this.bearerToken = token.bearerToken
        }
    }
}
