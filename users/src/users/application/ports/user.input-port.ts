import { User } from 'src/users/domain/entities/user.entity';
import { RegisterUserDto } from '../dto/register-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

export interface UserInputPort {
  /**
   * Registra un usuario
   * @param registerUserDto - Dto con name, email y password del usuario a registrar
   */
  registerUser(registerUserDto: RegisterUserDto): Promise<User>;

  /**
   * Obtiene un usuario por id
   * @param id - El id del usuario
   */
  getUserById(id: number): Promise<User>;

  /**
   * Verifica si un usuario existe
   * @param email - El email a verificar
   */
  exists(email: string): Promise<boolean>;

  /**
   * Actualiza un usuario
   * @param userData - Dto con los datos a actualizar
   */
  update(userData: UpdateUserDto): Promise<User>;

  /**
   * Elimina un usuario por id
   * @param id - El id del usuario a eliminar
   */
  delete(id: number): Promise<User>;
}
