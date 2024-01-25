import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car, CarDto } from './car.entity';
import { Repository } from 'typeorm';
import omit from 'lodash.omit';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carsRepository: Repository<Car>
  ) {}

  async findAll(): Promise<CarDto[]> {
    const cars = await this.carsRepository.find();
    return cars.map(this.entityToDto);
  }

  async create(car: Car): Promise<CarDto> {
    const newCar = new Car();
    newCar.make = car.make;
    newCar.model = car.model;
    newCar.package = car.package;
    newCar.color = car.color;
    newCar.year = car.year;
    newCar.category = car.category;
    newCar.mileage = car.mileage;
    newCar.price = car.price;
    await this.carsRepository.save(newCar);

    return this.entityToDto(newCar);
  }

  private entityToDto(car: Car): CarDto {
    return {
      ...omit(car, 'priceInCents'),
      price: car.price,
    };
  }
}
