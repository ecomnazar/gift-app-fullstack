import { resolve } from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'db/typeOrmConfig';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    CategoryModule,
    ProductModule,
    ServeStaticModule.forRoot(
      (() => {
        const publicDir = resolve('./public/');
        const servePath = '/public';
        return {
          rootPath: publicDir,
          serveRoot: servePath,
        };
      })(),
    ),
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
