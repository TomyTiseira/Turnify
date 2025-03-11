import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from 'src/roles/domain/dto/create-rol.dto';
import { RoleAlreadyExistsException } from 'src/roles/domain/exceptions/role-already-exists.exception';
import { RoleRepository } from 'src/roles/domain/ports/role.repository';

@Injectable()
export class CreateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(createRoleDto: CreateRoleDto) {
    const name = createRoleDto.name;
    const roleExists = await this.roleRepository.getByName(name);

    if (roleExists) throw new RoleAlreadyExistsException(name);

    const role = await this.roleRepository.create(name);
    return role;
  }
}
