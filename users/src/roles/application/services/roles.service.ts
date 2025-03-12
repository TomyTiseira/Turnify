import { Injectable } from '@nestjs/common';
import { RoleInputPort } from '../ports/role.input-port';
import { Role } from 'src/roles/domain/entities/role.entity';
import {
  CreateRoleUseCase,
  GetAllRolesUseCase,
  GetRoleByNameUseCase,
} from '../use-cases';
import { CreateRoleDto } from 'src/roles/domain/dto/create-rol.dto';

@Injectable()
export class RolesService implements RoleInputPort {
  constructor(
    private readonly createRoleUseCase: CreateRoleUseCase,
    private readonly getRoleByNameUseCase: GetRoleByNameUseCase,
    private readonly getAllRolesUseCase: GetAllRolesUseCase,
  ) {}

  createRole(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.createRoleUseCase.execute(createRoleDto);
  }

  getRoleByName(name: string): Promise<Role> {
    return this.getRoleByNameUseCase.execute(name);
  }

  getAllRoles(): Promise<Role[]> {
    return this.getAllRolesUseCase.execute();
  }
}
