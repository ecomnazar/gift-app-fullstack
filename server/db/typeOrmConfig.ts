import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'seven',
  password: 'seven',
  database: 'gift_app',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
};
