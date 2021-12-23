'use strict';

const data = require('./data/cities.json');

module.exports = class Cities {
  constructor(name) {
    this.name = name;
  }

  list() {
    if (this.name) {
      return new Error("Please, don't fill name in this function when you want get a list");
    }

    return data;
  }

  find() {
    if (!this.name) {
      return new Error('Please, fill name hint in this function when you want get a list');
    }

    return data.filter(city => city.name.includes(this.name));
  }
};
