export class Tariff {
  constructor(
    public name: string,
    public downloadSpeed: number,
    public uploadSpeed: number,
    public price: number,
    public benefits: string[] = []
  ) {}
}
