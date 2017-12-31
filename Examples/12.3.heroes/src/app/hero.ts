export class Hero {
  public _id: string;
  public name: string;
  public heroType: string;
  public quotes?: Quote[];
}

class Quote {
  text : string
}
