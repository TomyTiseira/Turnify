import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterUserDto, UpdateUserDto } from 'src/users/application/dto';
import { UserService } from 'src/users/application/services/user.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @MessagePattern('create-user')
  create(@Payload() registerUserDto: RegisterUserDto) {
    return this.usersService.registerUser(registerUserDto);
  }

  @MessagePattern('exists-user')
  exists(@Payload() email: string) {
    return this.usersService.exists(email);
  }

  @MessagePattern('find-user')
  findById(@Payload() id: string) {
    return this.usersService.getUserById(+id);
  }

  @MessagePattern('update-user')
  updateUser(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto);
  }

  @MessagePattern('delete-user')
  deleteUser(@Payload() id: number) {
    return this.usersService.delete(id);
  }
}
