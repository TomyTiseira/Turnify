import { User } from '../entities/user.entity';

export abstract class UserRepository {
  /**
   * Registra un usuario
   * @param user - El usuario a guardar
   */
  abstract save(user: User): Promise<User>;

  /**
   * Busca un usuario por su id
   * @param id - El id del usuario
   */
  abstract findById(id: number): Promise<User | null>;

  /**
   * Verifica si un usuario existe
   * @param email - El email a verificar
   */
  abstract exists(email: string): Promise<boolean>;

  /**
   * Actualizar un usuario existente
   * @param user - El usuario con los datos actualizado
   */
  abstract update(id: number, userData: Partial<User>): Promise<User>;

  /**
   * Elimina un usuario por id
   * @param id - El id del usuario a eliminar
   */
  abstract delete(id: number): Promise<User>;
}
