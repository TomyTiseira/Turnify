// src/shared/scripts/seed-roles.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seedRoles() {
  const roles = [{ name: 'admin' }, { name: 'user' }, { name: 'professional' }];

  try {
    // Verifica si los roles ya existen
    const existingRoles = await prisma.role.findMany({
      where: {
        name: {
          in: roles.map((role) => role.name),
        },
      },
    });

    // Filtra los roles que no existen
    const rolesToCreate = roles.filter(
      (role) =>
        !existingRoles.some((existingRole) => existingRole.name === role.name),
    );

    // Crea los roles que no existen
    if (rolesToCreate.length > 0) {
      await prisma.role.createMany({
        data: rolesToCreate,
      });
      console.log('Roles creados:', rolesToCreate);
    } else {
      console.log('Todos los roles ya existen.');
    }
  } catch (error) {
    console.error('Error al crear los roles:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedRoles().catch((error) => {
  console.error('Error during seedRoles execution:', error);
});
