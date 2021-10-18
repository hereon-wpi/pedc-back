import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "../users/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  async validate(username: string, password: string){
    const user = await this.userService.findOneByName(username);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user && user.password === password) {
      return {
        username: user.username,
        userId: user._id,
      };
    }

    return null;
  }
}
