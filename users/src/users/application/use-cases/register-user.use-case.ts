import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/ports/user.repository';
import { RegisterUserDto } from '../dto/register-user.dto';
import { User } from 'src/users/domain/entities/user.entity';
import { PasswordHasher } from 'src/users/domain/ports/password-hasher';
import { UserAlreadyExistsException } from 'src/users/domain/exceptions/user-already-exists.exception';

@Injectable()
export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasher,
  ) {}

  async execute(registerUserDto: RegisterUserDto) {
    const userExists = await this.userRepository.exists(registerUserDto.email);
    if (userExists) {
      throw new UserAlreadyExistsException(registerUserDto.email);
    }

    const { name, email, password } = registerUserDto;

    const role_id = 1;
    const hashedPassword = await this.passwordHasher.hash(password);
    const user = new User(name, email, hashedPassword, role_id);

    const userSaved = await this.userRepository.save(user);

    return userSaved;
  }
}
