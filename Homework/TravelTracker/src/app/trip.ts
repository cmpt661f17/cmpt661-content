export class Trip {
  public _id: string;
  public country: string;
  public city: string;
  public visitDate: Date;
  public visitType: string;
  public totalCost: number;
  public landmarks: Landmark[];
}

class Landmark {
  name: string;
  rating: number;
}
