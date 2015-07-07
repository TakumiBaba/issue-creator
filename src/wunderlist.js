'use strict';
import {Promise} from 'es6-promise';
import request   from 'superagent';

export default class Wunderlist {
  constructor(options) {
    this.host = 'https://a.wunderlist.com/api/v1';
    this.accessToken = options.accessToken;
    this.clientId = options.clientId;
  }

  lists() {
    return new Promise(function(resolve, reject) {
      request.get(this.host + '/lists')
      .set('X-Access-Token', this.accessToken)
      .set('X-Client-ID', this.clientId)
      .end(function(err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });

  }

  tasks() {

  }
}
