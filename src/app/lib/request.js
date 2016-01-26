import request from 'superagent';

var Request = {
  get(url) {
    return new Promise((resolve, reject) => {
      request.get(url)
        .end(function(err, res) {
          if (err || !res.ok) reject(err);
          else resolve(res.body);
        });
    });
  },

  post(url, body) {
    return new Promise((resolve, reject) => {
      request.post(url)
        .send(body)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) reject(err);
          else resolve(res.body);
        });
    });
  }
};

export default Request;
