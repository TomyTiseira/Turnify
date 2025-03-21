import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/common/infrastructure/out/persistence/prisma.module';
import { RolesController } from './infrastructure/in/controllers/roles.controller';
import { RolesService } from './application/services/roles.service';
import {
  CreateRoleUseCase,
  GetAllRolesUseCase,
  GetRoleByNameUseCase,
} from './application/use-cases';
import { RoleRepository } from './domain/ports/role.repository';
import { RoleRepositoryPostgres } from './infrastructure/out/persistence/role.repository.postgres';

@Module({
  imports: [PrismaModule],
  controllers: [RolesController],
  providers: [
    RolesService,
    CreateRoleUseCase,
    GetRoleByNameUseCase,
    GetAllRolesUseCase,
    {
      provide: RoleRepository,
      useClass: RoleRepositoryPostgres,
    },
  ],
  exports: [RolesService],
})
export class RolesModule {}
