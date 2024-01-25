const { DataSource } = require('typeorm');
const dataSourceConfig = require('../../data.source.json');
const dbdatasource = dataSourceConfig;

const dataSource = new DataSource(dbdatasource);
module.exports = dbdatasource;
module.exports = dataSource;
