import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/ports/user.repository';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UpdateUserInput } from 'src/users/domain/types/update-user.input';
import { UserNotFoundException } from 'src/users/domain/exceptions/user-not-found.exception';
import { UserAlreadyInactiveException } from 'src/users/domain/exceptions/user-already-inactive.exception';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: UpdateUserDto) {
    const id = userData.id;

    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundException();
    if (!user.isActive) throw new UserAlreadyInactiveException();

    const updateUserInput: UpdateUserInput = {
      name: userData.name,
      password: userData.password,
    };

    return this.userRepository.update(id, updateUserInput);
  }
}
