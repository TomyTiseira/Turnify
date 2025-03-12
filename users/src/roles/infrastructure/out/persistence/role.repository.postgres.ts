import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/infrastructure/out/persistence/prisma.service';
import { Role } from 'src/roles/domain/entities/role.entity';
import { RoleRepository } from 'src/roles/domain/ports/role.repository';

@Injectable()
export class RoleRepositoryPostgres implements RoleRepository {
  constructor(private readonly database: PrismaService) {}

  create(name: string): Promise<Role> {
    return this.database.role.create({ data: { name } });
  }

  getByName(name: string): Promise<Role | null> {
    return this.database.role.findUnique({ where: { name } });
  }

  getAll(): Promise<Role[]> {
    return this.database.role.findMany();
  }
}
