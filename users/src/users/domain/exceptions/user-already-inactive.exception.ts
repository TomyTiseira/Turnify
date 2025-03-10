import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class UserAlreadyInactiveException extends RpcException {
  constructor() {
    super({
      status: HttpStatus.CONFLICT,
      message: `El usuario está eliminado.`,
    });
    this.name = 'UserAlreadyInactiveException';
  }
}
