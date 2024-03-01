import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productService.getAllProducts(paginationDto);
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public',
        filename(req, file, callback) {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleUpload(@UploadedFile() file: Express.Multer.File) {
    return file.path;
  }
}
