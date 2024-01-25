import { Controller, Get, Post, Body } from '@nestjs/common';

import { CarService } from './car.service';
import { Car, CarDto } from './car.entity';

@Controller('/cars')
export class CarController {
  constructor(private readonly appService: CarService) {}

  @Get()
  findAll(): Promise<CarDto[]> {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() car: Car): Promise<CarDto> {
    return this.appService.create(car);
  }
}
