import data from './data/provinces.json';
import dataC from './data/cities.json';

export class Provinces
{
  private readonly name: string;
  private province: any;

  constructor(name: string)
  {
    this.name = name;
  }

  list()
  {
    if (this.name)
    {
      return new Error("Please, don't fill name in this function when you want get a list");
    }

    return data;
  }

  cities()
  {
    if (!this.name)
    {
      return new Error('Please, fill name in this function when you want get a list');
    }

    this.province = data.filter(province => province.name === this.name);
    return dataC.filter(city => city.province_id === this.province[0].id);
  }

  find()
  {
    if (!this.name)
    {
      return new Error('Please, fill name in this function when you want get a list');
    }

    return data.filter(province => province.name.includes(this.name));
  }
}
