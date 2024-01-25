import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  package: string;

  @Column()
  color: string;

  @Column()
  year: number;

  @Column()
  category: string;

  @Column()
  mileage: number;

  @Column()
  private priceInCents: number;

  get price(): number {
    return this.priceInCents / 100;
  }

  set price(value: number) {
    this.priceInCents = Math.round(value * 100);
  }
}

export class CarDto {
  id: number;
  make: string;
  model: string;
  package: string;
  color: string;
  year: number;
  category: string;
  mileage: number;
  price: number;
}
