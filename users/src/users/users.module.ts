import { Module } from '@nestjs/common';
import { UserRepository } from './domain/ports/user.repository';
import { UserRepositoryPostgres } from './infrastructure/out/persistence/repositories/user.repository.postgres';
import { UsersController } from './infrastructure/in/controllers/users.controller';
import { UserService } from './application/services/user.service';
import { PasswordHasher } from './domain/ports/password-hasher';
import { BcryptPasswordHasher } from './infrastructure/services/bcrypt-password-hasher';
import {
  DeleteUserUseCase,
  ExistsUserUseCase,
  FindByIdUserUseCase,
  RegisterUserUseCase,
  UpdateUserUseCase,
} from './application/use-cases';
import { PrismaService } from 'src/common/infrastructure/out/persistence/prisma.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [RolesModule],
  controllers: [UsersController],
  providers: [
    PrismaService,
    UserService,
    RegisterUserUseCase,
    ExistsUserUseCase,
    FindByIdUserUseCase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    {
      provide: UserRepository,
      useClass: UserRepositoryPostgres,
    },
    {
      provide: PasswordHasher,
      useClass: BcryptPasswordHasher,
    },
  ],
})
export class UsersModule {}
