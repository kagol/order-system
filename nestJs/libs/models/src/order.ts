import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { v1 } from 'uuid';

@Entity('order')
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    desc: string;
    @Column()
    img: string;
    @Column('float')
    cost: number;
    @Column({ type: 'text' })
    orderId: string;
    @Column('bool')
    isDel: boolean;
    @Column({ type: 'text', nullable: true })
    reason: string;
    @ManyToOne(() => User, user => user.order)
    creator: User
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createAt: Date;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updateAt: Date;
    @BeforeInsert()
    beforeInsert() {
        this.orderId = v1();
        this.isDel = false;
    }
}