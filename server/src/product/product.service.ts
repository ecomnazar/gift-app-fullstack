import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAllProducts() {
    return await this.productRepository.find({
      relations: {
        categories: true,
      },
    });
  }

  async getProductById(id: string) {
    return await this.productRepository.findOne({
      where: { id },
    });
  }

  async createProduct(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    product.categories = createProductDto.categoryIds.map((id) => ({
      ...new CategoryEntity(),
      id,
    }));
    return this.productRepository.save(product);
  }

  async deleteProduct(id: number) {
    return await this.productRepository.delete(id);
  }
}
