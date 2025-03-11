import { CreateRoleDto } from 'src/roles/domain/dto/create-rol.dto';
import { Role } from 'src/roles/domain/entities/role.entity';

export interface RoleInputPort {
  createRole: (createRoleDto: CreateRoleDto) => Promise<Role>;

  getRoleByName: (name: string) => Promise<Role>;
}
