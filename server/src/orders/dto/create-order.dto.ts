import { CreateProductDto } from 'src/product/dto/create-product.dto';

export class CreateOrderDto {
  data: CreateProductDto[];
  customerAddress: string;
  customerContact: string;
  customerComment: string;
}
