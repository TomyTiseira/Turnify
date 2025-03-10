import { Injectable } from '@nestjs/common';
import { User } from 'src/users/domain/entities/user.entity';
import { UserAlreadyInactiveException } from 'src/users/domain/exceptions/user-already-inactive.exception';
import { UserNotFoundException } from 'src/users/domain/exceptions/user-not-found.exception';
import { UserRepository } from 'src/users/domain/ports/user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: number): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new UserNotFoundException();
    if (!user.isActive) throw new UserAlreadyInactiveException();

    return await this.userRepository.delete(id);
  }
}
