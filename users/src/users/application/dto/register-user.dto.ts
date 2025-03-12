import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @MinLength(2)
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos',
    },
  )
  password: string;

  @IsPhoneNumber('AR', {
    message: 'Número de teléfono inválido para Argentina',
  })
  phoneNum: string;
}
