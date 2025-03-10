import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envs } from 'config';
import { RpcCustomExceptionFilter } from './common/exceptions/rpc-custom-exception.filter';
async function bootstrap() {
  const logger = new Logger('Gateway');
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalFilters(new RpcCustomExceptionFilter());

  await app.listen(envs.port);
  logger.log(`Gateway is listening on port ${envs.port}`);
}
bootstrap().catch((error: Error) => {
  const logger = new Logger('Bootstrap-Gateway');
  logger.error(`Error during bootstrap: ${error.message}`, error.stack);
});
