import { authenticationRepository } from "../../../repository";
import { makeObservable, observable, action } from "mobx"

export default class LoginState {
    repository = authenticationRepository;
    bearerToken = "";

    constructor() {
        makeObservable(this, {
            bearerToken: observable,
            getToken: action,
        })
    }

    async getToken() {
        this.bearerToken = "loading..."
        const token = await this.repository.getAuthTokens();
        await new Promise((it) => { setTimeout(it, 2000); console.log("timeout") })
        if (token?.bearerToken != null) {
            this.bearerToken = token.bearerToken;
        }
    }
}
