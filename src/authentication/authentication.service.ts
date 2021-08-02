import {Injectable} from '@nestjs/common';


@Injectable()
export class AuthenticationService {
  async isValid(username: string, password: string): Promise<boolean> {
    return Promise.resolve(username === 'user' && password === '1');
  }
}
