import { PartialType } from "@nestjs/mapped-types";
import { CreateOrder } from "./create-order.dto";
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateOrder extends PartialType(CreateOrder) {
    @IsBoolean()
    @IsOptional()
    isDel: boolean;
    @IsString()
    @IsOptional()
    reason: string;
}