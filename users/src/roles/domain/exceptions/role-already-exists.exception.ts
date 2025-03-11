import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class RoleAlreadyExistsException extends RpcException {
  constructor(name: string) {
    super({
      status: HttpStatus.CONFLICT,
      message: `Role with name ${name} already exists`,
    });
    this.name = 'RoleAlreadyExistsException';
  }
}
