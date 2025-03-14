import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrder {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    desc: string;
    @IsNotEmpty()
    @IsString()
    orderImage: string;
    @IsNumber()
    cost: number;
}