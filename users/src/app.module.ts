import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PrismaModule } from './common/infrastructure/out/persistence/prisma.module';

@Module({
  imports: [UsersModule, RolesModule, PrismaModule],
})
export class AppModule {}
