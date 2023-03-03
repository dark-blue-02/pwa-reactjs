import { internalDocApi } from "../data";
import { savedBearerToken } from "../utils";

export const InternalDocRepository = {
    _api: internalDocApi,
    async getIncomingDocs({ pageIndex, pageSize }) {
        try {
            const data = await this._api.getIncomingDocs({
                pageIndex: pageIndex,
                size: pageSize,
                bearerToken: savedBearerToken
            });
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}