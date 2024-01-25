import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModule } from './car/car.module';
import dataSourceConfig from '../../data.source.json';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceConfig as never), CarModule],
})
export class AppModule {}
