import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/users/domain/ports/user.repository';

@Injectable()
export class ExistsUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(email: string) {
    return this.userRepository.exists(email);
  }
}
