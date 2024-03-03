export class CreateProductDto {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryIds: string[];
}
