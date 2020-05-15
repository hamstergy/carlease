export class Car {
  public id: number;
  public name: string;
  public slug: string;
  public className: string;
  public description: string;
  public detail: string;
  public price: number;
  public lease: number;
  public finance: number;
  public image: string;
  public video: string;
  public makeName: string;
  public makeSlug: string;

  constructor(id: number,
              name: string,
              slug: string,
              className: string,
              description: string,
              detail: string,
              price: number,
              lease: number,
              finance: number, image: string,
              video: string,
              makeName: string,
              makeSlug: string) {
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.className = className;
    this.description = description;
    this.detail = detail;
    this.price = price;
    this.lease = lease;
    this.finance = finance;
    this.image = image;
    this.video = video;
    this.makeName = makeName;
    this.makeSlug = makeSlug;
  }

}


