import { Injectable } from '@nestjs/common';
import { Role } from 'src/roles/domain/entities/role.entity';
import { RoleRepository } from 'src/roles/domain/ports/role.repository';

@Injectable()
export class GetAllRolesUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}

  async execute(): Promise<Role[]> {
    return this.roleRepository.getAll();
  }
}
