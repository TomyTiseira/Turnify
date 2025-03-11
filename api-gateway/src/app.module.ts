import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NatsModule } from './transports/nats.module';
import { UserRolesModule } from './user-roles/user-roles.module';

@Module({
  imports: [UsersModule, NatsModule, UserRolesModule],
})
export class AppModule {}
