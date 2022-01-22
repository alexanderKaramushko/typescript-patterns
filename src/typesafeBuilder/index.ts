interface ValidRequest {
  url: string;
  method: 'get' | 'post';
  data: object;
}

/**
 * @description Every method updates `this` to typesafely execute the send() method
 */
export default class RequestBuilder {

  public url: string | null = null;
  public method: 'get' | 'post' | null = null;
  public data: object | null = null;

  setUrl(url: string): this & Pick<ValidRequest, 'url'> {
    this.url = url;

    return Object.assign(this, { url });
  }

  setMethod(method: 'get' | 'post'): this & Pick<ValidRequest, 'method'> {
    this.method = method;

    return Object.assign(this, { method });
  }

  setData(data: object): this & Pick<ValidRequest, 'data'> {
    this.data = data;

    return Object.assign(this, { data });
  }

  send(this: ValidRequest): void {
    // eslint-disable-next-line no-console
    console.log(`Sending ${JSON.stringify(this.data)} to ${this.url}`);
  }

}
