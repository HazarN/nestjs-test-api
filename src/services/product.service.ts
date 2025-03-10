import { Product, ProductDocument } from '@/schemas/product.schema';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dtos/createProductDto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  public async createProduct(
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    const product = new this.productModel(createProductDto);
    return product.save();
  }

  public async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
