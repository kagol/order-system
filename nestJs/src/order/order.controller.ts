import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrder } from './dto/create-order.dto';
import { User } from '../user/user.decorator';
import { UpdateOrder } from './dto/update-order';
import { RemoveOrder } from './dto/remove-order';
import { Permission } from '../public/permission.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { createHash } from 'crypto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Get('/')
  @Permission('order::list')
  getOrder(@Query('page', ParseIntPipe) page: number, @Query('size', ParseIntPipe) size: number) {
    return this.orderService.getOrderList(page, size);
  }

  @Get('/:id')
  @Permission('order::query')
  getOrderInfo(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.orderService.getOrderInfo(id);
  }

  @Post('/')
  @Permission('order::create')
  createOrder(
    @Body() body: CreateOrder,
    @User() user: RequestUser['user']
  ) {
    return this.orderService.createOrder(body, user.email);
  }

  @Patch('/')
  @Permission('order::update')
  updateOrder(
    @Query('id', ParseIntPipe) id: number,
    @Body() body: UpdateOrder
  ) {
    return this.orderService.updateOrder(body, id);
  }


  @Delete('/')
  @Permission('order::remove')
  removeOrder(
    @Query('id', ParseIntPipe) id: number,
    @Body() body: RemoveOrder
  ) {
    return this.orderService.removeOrder(id, body.reason);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    const fileName = createHash('sha256').update(file.buffer).digest('hex');
    const ext = file.originalname.split('.')[1];
    writeFileSync(
      join(__dirname, 'data/image', `${fileName}.${ext}`),
      file.buffer
    )
    return `/image/${fileName}.${ext}`;
  }
}
