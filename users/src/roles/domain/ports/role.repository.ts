import { Role } from '../entities/role.entity';

export abstract class RoleRepository {
  /**
   * Crear un nuevo rol
   * @param name - Nombre del rol
   */
  abstract create(name: string): Promise<Role>;

  /**
   * Obtener un rol por el nombre
   * @param name - Nombre del rol
   */
  abstract getByName(name: string): Promise<Role | null>;

  /**
   * Obtener todos los roles
   */
  abstract getAll(): Promise<Role[]>;
}
