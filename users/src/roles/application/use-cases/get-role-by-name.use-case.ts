import { Injectable } from '@nestjs/common';
import { RoleNotFoundException } from 'src/roles/domain/exceptions/role-not-found.exception';
import { RoleRepository } from 'src/roles/domain/ports/role.repository';

@Injectable()
export class GetRoleByNameUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(name: string) {
    const role = await this.roleRepository.getByName(name);
    if (!role) throw new RoleNotFoundException(name);

    return role;
  }
}
