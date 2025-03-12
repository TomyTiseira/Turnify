import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserRolesService } from './user-roles.service';
import { RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import { CreateRoleDto } from './dto/create-rol.dto';

@Controller('user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.userRolesService.create(createRoleDto).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Get()
  findAll() {
    return this.userRolesService.findAll().pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.userRolesService.findOne(name).pipe(
      catchError((error) => {
        throw new RpcException(error);
      }),
    );
  }
}
