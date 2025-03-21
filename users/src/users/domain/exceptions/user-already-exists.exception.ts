import { HttpStatus } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export class UserAlreadyExistsException extends RpcException {
  constructor(email: string) {
    super({
      status: HttpStatus.CONFLICT,
      message: `El usuario con el email ${email} ya existe.`,
    });
    this.name = 'UserAlreadyExistsException';
  }
}
