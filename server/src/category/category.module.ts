import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CategoryProductEntity } from './entities/category-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, CategoryProductEntity])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
