import RequestBuilder from '.';

new RequestBuilder()
  .setUrl('/test')
  .setMethod('get')
  .setData({ test: 'data' })
  .send();
