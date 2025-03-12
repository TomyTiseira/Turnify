import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/ports/user.repository';
import { RegisterUserDto } from '../dto/register-user.dto';
import { User } from 'src/users/domain/entities/user.entity';
import { PasswordHasher } from 'src/users/domain/ports/password-hasher';
import { UserAlreadyExistsException } from 'src/users/domain/exceptions/user-already-exists.exception';
import { RolesService } from 'src/roles/application/services/roles.service';
import { RoleNotFoundException } from 'src/common/domain/exceptions/role-not-found.exception';
import { UserRoles } from 'src/shared/constants/user-roles.enum';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
    private readonly rolesService: RolesService,
  ) {}

  async execute(registerUserDto: RegisterUserDto) {
    const userExists = await this.userRepository.exists(registerUserDto.email);
    if (userExists) {
      throw new UserAlreadyExistsException(registerUserDto.email);
    }

    const role = await this.rolesService.getRoleByName(UserRoles.USER);

    if (role.id === undefined) {
      throw new RoleNotFoundException(UserRoles.USER);
    }

    const { name, email, password, phoneNum } = registerUserDto;

    const hashedPassword = await this.passwordHasher.hash(password);

    const user = new User(name, email, hashedPassword, phoneNum, role.id);

    const userSaved = await this.userRepository.save(user);

    return userSaved;
  }
}
