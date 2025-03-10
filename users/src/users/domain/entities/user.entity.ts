export class User {
  id?: number;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  createAt: Date;
  updateAt: Date;
  role_id: number;

  constructor(
    name: string,
    email: string,
    password: string,
    role_id: number,
    isActive?: boolean,
    createAt?: Date,
    updateAt?: Date,
  ) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.isActive = isActive ?? true;
    this.role_id = role_id;
    this.createAt = createAt ?? new Date();
    this.updateAt = updateAt ?? new Date();
  }
}
