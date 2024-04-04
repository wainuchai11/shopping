import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getProductAll(@Query('name') productName?: string): ProductDTO[] {
    if (productName) {
      return this.productService.findByCondition((product) =>
        product.name.includes(productName),
      );
    }
    return this.productService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id: string): ProductDTO {
    return this.productService.findById(Number(id));
  }
}
