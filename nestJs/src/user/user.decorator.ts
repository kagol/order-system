import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from "express";

export const User = createParamDecorator((_, ctx: ExecutionContext) => {
    const context = ctx.switchToHttp();
    const req = context.getRequest<Request & RequestUser>();
    return req.user;
})