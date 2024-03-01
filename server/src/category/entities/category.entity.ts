import { ProductEntity } from 'src/product/entities/product.entity';
import { Base } from 'src/utils/baseEntity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class CategoryEntity extends Base {
  @Column()
  name: string;

  @ManyToMany(() => ProductEntity, (product) => product.categories)
  @JoinTable({
    name: 'category_product',
    joinColumn: {
      name: 'category_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'category_product_category_id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'category_product_product_id',
    },
  })
  products: ProductEntity[];
}
