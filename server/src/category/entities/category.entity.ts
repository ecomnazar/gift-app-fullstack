import { Base } from 'src/utils/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class CategoryEntity extends Base {
  @Column()
  name: string;
}
