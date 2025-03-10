import { Injectable, Inject, HttpStatus } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { NATS_SERVERS } from 'config';
import { ClientProxy, RpcException } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(@Inject(NATS_SERVERS) private readonly client: ClientProxy) {}

  create(registerUserDto: RegisterUserDto) {
    return this.client.send('create-user', registerUserDto);
  }

  exists(email: string) {
    return this.client.send('exists-user', email);
  }

  findOne(id: number) {
    if (isNaN(id))
      throw new RpcException({
        message: 'Invalid id',
        status: HttpStatus.BAD_REQUEST,
      });

    return this.client.send('find-user', id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    if (isNaN(id))
      throw new RpcException({
        message: 'Invalid id',
        status: HttpStatus.BAD_REQUEST,
      });

    return this.client.send('update-user', { ...updateUserDto, id });
  }

  remove(id: number) {
    if (isNaN(id))
      throw new RpcException({
        message: 'Invalid id',
        status: HttpStatus.BAD_REQUEST,
      });

    return this.client.send('delete-user', id);
  }
}
