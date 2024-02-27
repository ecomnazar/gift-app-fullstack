import { CategoryEntity } from 'src/category/entities/category.entity';
import { Base } from 'src/utils/baseEntity';
import { Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class ProductEntity extends Base {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ name: 'image_url' })
  imageUrl: string;

  @ManyToMany(() => CategoryEntity, (category) => category.products)
  categories: CategoryEntity[];
}
