import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RolesService } from 'src/roles/application/services/roles.service';
import { CreateRoleDto } from 'src/roles/domain/dto/create-rol.dto';

@Controller()
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @MessagePattern('create-role')
  create(@Payload() createRoleDto: CreateRoleDto) {
    return this.rolesService.createRole(createRoleDto);
  }

  // @MessagePattern('findAllRoles')
  // findAll() {
  //   return this.rolesService.findAll();
  // }

  @MessagePattern('find-role-by-name')
  findOne(@Payload() name: string) {
    return this.rolesService.getRoleByName(name);
  }
}
