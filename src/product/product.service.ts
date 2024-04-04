import { Injectable } from '@nestjs/common';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductService {
  private products: ProductDTO[] = [
    {
      id: 1,
      name: 'Mango',
      price: 250,
      description: 'Fresh Mango',
    },
    {
      id: 2,
      name: 'Apple',
      price: 150,
      description: 'Fresh Apple',
    },
    {
      id: 3,
      name: 'Banana',
      price: 100,
      description: 'Fresh Banana',
    },
  ];

  findAll() {
    return this.products;
  }

  findById(id: number) {
    return this.products.find((product) => product.id === id);
  }

  findByCondition(predicate: (product: ProductDTO) => boolean) {
    return this.products.filter((product) => predicate(product));
  }
}
