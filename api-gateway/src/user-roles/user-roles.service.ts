import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'config';
import { CreateRoleDto } from './dto/create-rol.dto';

@Injectable()
export class UserRolesService {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  create(createRoleDto: CreateRoleDto) {
    return this.client.send('create-role', createRoleDto);
  }

  findAll() {
    return this.client.send('find-all-roles', {});
  }

  findOne(name: string) {
    return this.client.send('find-role-by-name', name);
  }
}
