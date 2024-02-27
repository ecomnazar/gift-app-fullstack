import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category_product' })
export class CategoryProductEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
}
