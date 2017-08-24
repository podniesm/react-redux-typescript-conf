interface IFetchRequestInitBuilderOperations {
    setMethod(method: string): IFetchRequestInitBuilderOperations;

    setHeaders(headers: Headers): IFetchRequestInitBuilderOperations;

    setBody(body: any): IFetchRequestInitBuilderOperations;

    setMode(mode: RequestMode): IFetchRequestInitBuilderOperations;

    setCredentials(credentials: RequestCredentials): IFetchRequestInitBuilderOperations;

    setCache(cache: RequestCache): IFetchRequestInitBuilderOperations;

    setRedirect(redirect: RequestRedirect): IFetchRequestInitBuilderOperations;

    setReferrer(referrer: string): IFetchRequestInitBuilderOperations;

    setReferrerPolicy(referrerPolicy: ReferrerPolicy): IFetchRequestInitBuilderOperations;

    setIntegrity(integrity: string): IFetchRequestInitBuilderOperations;

    setKeepAlive(keepAlive: boolean): IFetchRequestInitBuilderOperations;

    materialize(): RequestInit;
}

export interface IFetchRequestInitBuilder {
    start(): IFetchRequestInitBuilderOperations;
}

class FetchRequestInitBuilder implements IFetchRequestInitBuilder, IFetchRequestInitBuilderOperations {
    private _requestInit: RequestInit;

    public start(): IFetchRequestInitBuilderOperations {
        this._requestInit = {};
        return this;
    }

    public setMethod(method: string): IFetchRequestInitBuilderOperations {
        this._requestInit.method = method;
        return this;
    }

    public setHeaders(headers: Headers): IFetchRequestInitBuilderOperations {
        this._requestInit.headers = headers;
        return this;
    }

    public setBody(body: any): IFetchRequestInitBuilderOperations {
        this._requestInit.body = body;
        return this;
    }

    public setMode(mode: RequestMode): IFetchRequestInitBuilderOperations {
        this._requestInit.mode = mode;
        return this;
    }

    public setCredentials(credentials: RequestCredentials): IFetchRequestInitBuilderOperations {
        this._requestInit.credentials = credentials;
        return this;
    }

    public setCache(cache: RequestCache): IFetchRequestInitBuilderOperations {
        this._requestInit.cache = cache;
        return this;
    }

    public setRedirect(redirect: RequestRedirect): IFetchRequestInitBuilderOperations {
        this._requestInit.redirect = redirect;
        return this;
    }

    public setReferrer(referrer: string): IFetchRequestInitBuilderOperations {
        this._requestInit.referrer = referrer;
        return this;
    }

    public setReferrerPolicy(referrerPolicy: ReferrerPolicy): IFetchRequestInitBuilderOperations {
        this._requestInit.referrerPolicy = referrerPolicy;
        return this;
    }

    public setIntegrity(integrity: string): IFetchRequestInitBuilderOperations {
        this._requestInit.integrity = integrity;
        return this;
    }

    public setKeepAlive(keepAlive: boolean): IFetchRequestInitBuilderOperations {
        this._requestInit.keepalive = keepAlive;
        return this;
    }

    public materialize(): RequestInit {
        return this._requestInit;
    }
}

function fetchRequestInitBuilderFactory(): IFetchRequestInitBuilder {
    return new FetchRequestInitBuilder();
}

export default fetchRequestInitBuilderFactory;
