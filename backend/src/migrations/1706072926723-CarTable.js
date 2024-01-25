const { Table } = require('typeorm');

class CarTable1706072926722 {
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: 'car',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'make',
            type: 'varchar',
          },
          {
            name: 'model',
            type: 'varchar',
          },
          {
            name: 'package',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'color',
            type: 'varchar',
          },
          {
            name: 'year',
            type: 'int',
          },
          {
            name: 'category',
            type: 'varchar',
          },
          {
            name: 'mileage',
            type: 'int',
          },
          {
            name: 'priceInCents',
            type: 'bigint',
          },
        ],
      })
    );
  }

  async down(queryRunner) {
    await queryRunner.dropTable('car');
  }
}

module.exports = CarTable1706072926722;
