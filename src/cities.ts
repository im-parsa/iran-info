import data from './data/cities.json';

export class Cities
{
  private readonly name: string;

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

  public search()
  {
    if (!this.name)
    {
      return new Error('Please, fill keyword hint in this function when you want get a list');
    }

    return data.filter(city => city.name.includes(this.name));
  }

  public find()
  {
    if (!this.name)
    {
      return new Error('Please, fill name hint in this function when you want get a list');
    }

    return data.filter(city => city.name === this.name);
  }
}
