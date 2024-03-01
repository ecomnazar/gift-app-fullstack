import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async getAllProducts(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;
    const data = await this.productRepository.find({
      relations: {
        categories: true,
      },
      skip: offset,
      take: limit ?? 20,
    });
    const dataLength = (await this.productRepository.find()).length;
    return { data, count: dataLength };
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

  async deleteProduct(id: string) {
    return await this.productRepository.delete(id);
  }
}
