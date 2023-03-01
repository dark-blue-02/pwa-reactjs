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

    async getToken() {
        this.bearerToken = "loading..."
        const token = await this.repository.getAuthTokens()
        delay(1000);
        if (token?.bearerToken != null) {
            this.bearerToken = token.bearerToken
        }
    }
}
