import { Base } from 'src/utils/baseEntity';
import { Column, Entity } from 'typeorm';

@Entity()
export class OrdersEntity extends Base {
  @Column({ name: 'customer_address' })
  customerAddress: string;

  @Column({ name: 'customer_contact' })
  customerContact: string;

  @Column({ name: 'customer_comment' })
  customerComment: string;
}
