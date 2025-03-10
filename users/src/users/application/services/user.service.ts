import { Injectable } from '@nestjs/common';
import { UserInputPort } from '../ports/user.input-port';
import { User } from 'src/users/domain/entities/user.entity';
import { RegisterUserDto } from '../dto/register-user.dto';
import {
  DeleteUserUseCase,
  ExistsUserUseCase,
  FindByIdUserUseCase,
  RegisterUserUseCase,
  UpdateUserUseCase,
} from '../use-cases';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UserService implements UserInputPort {
  constructor(
    private readonly registerUserUseCase: RegisterUserUseCase,
    private readonly existsUserUseCase: ExistsUserUseCase,
    private readonly findByIdUserUseCase: FindByIdUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly deleteUserUseCase: DeleteUserUseCase,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    return this.registerUserUseCase.execute(registerUserDto);
  }

  getUserById(id: number): Promise<User> {
    return this.findByIdUserUseCase.execute(id);
  }

  exists(email: string): Promise<boolean> {
    return this.existsUserUseCase.execute(email);
  }

  update(userData: UpdateUserDto): Promise<User> {
    return this.updateUserUseCase.execute(userData);
  }

  delete(id: number): Promise<User> {
    return this.deleteUserUseCase.execute(id);
  }
}
