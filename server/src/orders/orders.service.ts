import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly ordersRepository: Repository<OrdersEntity>,
  ) {}

  async getAllOrders() {
    const orders = await this.ordersRepository.find();
    return orders;
  }

  async createOrder(createOrderDto: CreateOrderDto) {
    const order = this.ordersRepository.create(createOrderDto);
    return await this.ordersRepository.save(order);
  }
}
