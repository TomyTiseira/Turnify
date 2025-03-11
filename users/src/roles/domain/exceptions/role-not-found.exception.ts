import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class RoleNotFoundException extends RpcException {
  constructor(name: string) {
    super({
      status: HttpStatus.NOT_FOUND,
      message: `Role '${name}' not found`,
    });
    this.name = 'RoleNotFoundException';
  }
}
