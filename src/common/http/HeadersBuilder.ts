interface IMaterialize {
    materialize(): Headers;
}

interface IAddContentType {
    addContentType(contentType: string): IMaterialize;
}

export interface IHeadersBuilder {
    start(): IAddContentType;
}

interface IHeadersBuilderOperations extends IAddContentType, IMaterialize {}

class HeadersBuilder implements IHeadersBuilder, IHeadersBuilderOperations {
    private _headers: Headers;

    public start(): IAddContentType {
        this._headers = new Headers();
        return this;
    }

    public addContentType(contentType: string): IMaterialize {
        this._headers.append('Content-Type', contentType);
        return this;
    }

    public materialize(): Headers {
        return this._headers;
    }
}

function headersBuilderFactory(): IHeadersBuilder {
    return new HeadersBuilder();
}

export default headersBuilderFactory;
