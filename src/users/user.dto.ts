export enum USER_ROLE {
  USER = 'USER',
  SCIENTIST = 'SCIENTIST'
}

export class CreateUserDTO {
  username: string;
  password: string;
  role: USER_ROLE;
  docs: string[];
}

export class UpdateUserDTO {
  userId: string;
  docId?: string;
  role?: USER_ROLE;
}
