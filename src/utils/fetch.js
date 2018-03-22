export default (url, params) => {
  const options = {};
  if (params) {
    Object.assign(options, params);
  }
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }
  return window.fetch(url, options)
    .then(res => {
      if (res.status === 200) {
        return res.json();
      }
      return res.text();
    })
    .catch(err => err)
    .then(data => {
      if (typeof data === 'string') {
        return Promise.reject(data);
      }
      return data;
    })
}
