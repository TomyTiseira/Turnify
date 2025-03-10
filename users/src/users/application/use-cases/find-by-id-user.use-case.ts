import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from 'src/users/domain/exceptions/user-not-found.exception';
import { UserRepository } from 'src/users/domain/ports/user.repository';

@Injectable()
export class FindByIdUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: number) {
    const user = await this.userRepository.findById(id);

    if (!user) throw new UserNotFoundException();

    return user;
  }
}
