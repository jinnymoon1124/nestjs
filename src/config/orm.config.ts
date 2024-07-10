import { Logger } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const myDataSource : TypeOrmModuleOptions = {
  type: 'mysql',
  name: 'regica',
  host: process.env.DB_REGI_HOST,
  port: parseInt(process.env.DB_REGI_PORT),
  username: process.env.DB_REGICA_USER,
  password: process.env.DB_REGICA_PASSWORD,
  database: process.env.DB_REGICA_DATABASE,
  logging: true,
  entities: [__dirname + '/model/regica/*.ts'],
  synchronize: false,
}

export default myDataSource;
