import {Injectable, UnauthorizedException} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { KerberosService} from './kerberos.service';
import { JwtService } from "@nestjs/jwt";
import useRealTimers = jest.useRealTimers;


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private kerberos : KerberosService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    //TODO check environment to perform Kerberos or UserService
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const {password, ...result} = user;
      return result;
    }

    return this.kerberos.validate(username, pass);
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
