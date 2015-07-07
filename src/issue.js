'use strict';
import Wunderlist from './wunderlist';

export default class Issue {
  constructor() {
    const options = {
      accessToken: process.env.WUNDERLIST_ACCESS_TOKEN,
      clientID: process.env.WUNDERLIST_CLIENT_ID
    };
    this.api = new Wunderlist(options);
  }

  list() {
    this.api.lists().then(function(res) {
      console.log(res);
    }).catch(function(err) {
      console.log(err);
    });
  }

  open() {

  }

  close() {

  }
}
