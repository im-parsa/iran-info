import dataC from './data/cities.json';
import data from './data/provinces.json';

export class Provinces
{
  private readonly name: string;
  private province: any;

  constructor(name: string)
  {
    this.name = name;
  }

  public list()
  {
    if (this.name)
    {
      return new Error("Please, don't fill name in this function when you want get a list");
    }

    return data;
  }

  public cities()
  {
    if (!this.name)
    {
      return new Error('Please, fill name in this function when you want get a list');
    }

    this.province = data.filter(province => province.name === this.name);
    return dataC.filter(city => city.province_id === this.province[0].id);
  }

  public search()
  {
    if (!this.name)
    {
      return new Error('Please, fill keyword in this function when you want get a list');
    }

    return data.filter(province => province.name.includes(this.name));
  }

  public find()
  {
    if (!this.name)
    {
      return new Error('Please, fill name in this function when you want get a list');
    }

    return data.filter(province => province.name === this.name);
  }
}
