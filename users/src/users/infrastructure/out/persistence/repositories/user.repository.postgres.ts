import { User } from 'src/users/domain/entities/user.entity';
import { UserRepository } from 'src/users/domain/ports/user.repository';
import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepositoryPostgres implements UserRepository {
  constructor(private readonly database: PrismaService) {}

  async save(user: User): Promise<User> {
    const createdUser = await this.database.user.create({ data: user });
    return createdUser;
  }

  findById(id: number): Promise<User | null> {
    return this.database.user.findFirst({
      where: {
        id,
      },
    });
  }

  async exists(email: string): Promise<boolean> {
    const user = await this.database.user.findFirst({
      where: {
        email,
      },
    });

    return !!user;
  }

  update(id: number, userData: Partial<User>): Promise<User> {
    return this.database.user.update({
      where: { id: id },
      data: userData,
    });
  }

  async delete(id: number): Promise<User> {
    return await this.database.user.update({
      where: {
        id,
      },
      data: {
        isActive: false,
      },
    });
  }
}
