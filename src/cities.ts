import data from './data/cities.json';

export class Cities {
  private readonly name: string;

  constructor(name: string) {
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
}
