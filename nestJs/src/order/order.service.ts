import { User } from '@app/models';
import { Order } from '@app/models/order';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { And, Like, Or, Repository } from 'typeorm';
import { CreateOrder } from './dto/create-order.dto';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../.generate/i18n.generated';
import { UpdateOrder } from './dto/update-order';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(User)
        private userRep: Repository<User>,
        @InjectRepository(Order)
        private order: Repository<Order>,
        private readonly i18n: I18nService<I18nTranslations>
    ) { }
    async createOrder(
        body: CreateOrder,
        userEmail: string
    ) {
        const user = await this.userRep.findOne({
            where: {
                email: userEmail,
            }
        });
        if (!user) {
            throw new HttpException(
                this.i18n.translate('exception.user.userExists', {
                    lang: I18nContext.current().lang,
                }),
                HttpStatus.BAD_REQUEST
            );
        }
        const { name, desc, cost, orderImage } = body;
        const order = this.order.create({
            name,
            desc,
            cost,
            creator: user,
            img: orderImage
        })
        const newOrder = await this.order.save(order)
        return await this.getOrderInfo(newOrder.id)
    }
    async updateOrder(
        body: UpdateOrder,
        id: number
    ) {
        const { name, desc, cost, orderImage, isDel, reason } = body;
        const order = await this.getOrderInfo(id);
        if (isDel !== undefined) {
            order.isDel = isDel;
            order.reason = !isDel ? '' : reason;
        }
        if (orderImage) {
            order.img = orderImage
        }
        if (name) {
            order.name = name;
        }
        if (desc) {
            order.desc = desc;
        }
        if (cost !== undefined) {
            order.cost = cost;
        }
        return this.order.save(order);
    }
    async removeOrder(id: number, reason?: string) {
        const order = await this.getOrderInfo(id);
        order.isDel = true;
        order.reason = reason;
        return this.order.save(order);
    }
    async getOrderInfo(id: number) {
        const order = await this.order.findOne({
            where: {
                id
            },
            select: {
                creator: {
                    name: true,
                    id: true,
                    role: {
                        id: true,
                        name: true
                    }
                }
            },
            relations: {
                creator: {
                    role: true,
                }
            }
        })
        if (!order) {
            throw new HttpException(
                this.i18n.translate('exception.order.notFound', {
                    lang: I18nContext.current().lang,
                }),
                HttpStatus.BAD_REQUEST
            );
        }
        return {
            ...order,
            param: {
                size: 'xxl',
                color: 'red'
            }
        };
    }
    async getOrderList(
        page: number,
        size: number,
        filter?: string
    ) {
        const total = await this.order.count({
            where: [
                {
                    isDel: false,
                    name: filter ? Like(`%${filter}%`) : undefined,
                },
                {
                    isDel: false,
                    orderId: filter ? Like(`%${filter}%`) : undefined,
                }
            ]
        });

        const items = await this.order.find({
            skip: (Math.max(page, 1) - 1) * size,
            take: size,
            select: {
                name: true,
                id: true,
                orderId: true,
                createAt: true,
                updateAt: true,
                isDel: true,
                reason: true,
                creator: {
                    id: true,
                    name: true,
                    role: {
                        name: true,
                        id: true
                    }
                }
            },
            relations: {
                creator: {
                    role: true
                }
            },
            where: [
                {
                    // isDel: false, // 如果不需要展示被删除的订单，请同时取消 160,164 两行注释
                    name: filter ? Like(`%${filter}%`) : undefined,
                },
                {
                    // isDel: false, // 如果不需要展示被删除的订单，请同时取消 160,164 两行注释
                    orderId: filter ? Like(`%${filter}%`) : undefined,
                }
            ]
        })
        return {
            items,
            total
        }
    }
}
