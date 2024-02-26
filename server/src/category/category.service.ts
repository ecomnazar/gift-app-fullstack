import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async getAllCategories() {
    return await this.categoryRepository.find();
  }

  async getGategoryByid(id: number) {
    const found = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!found) {
      throw new NotFoundException(`Category with id: ${id} not found`);
    }
    return found;
  }

  async createCategory(createCategoryDto: CreateCategoryDto) {
    const category = this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(category);
  }

  async deleteCategory(id: number) {
    return await this.categoryRepository.delete(id);
  }
}
