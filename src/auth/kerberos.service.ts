import {Injectable, UnauthorizedException} from "@nestjs/common";
import { User } from "../users/users.service";
import { checkPassword} from 'kerberos';

//TODO environment
const kService = "HTTP@desy.de";
const kDefaultRealm = "DESY.DE";

@Injectable()
export class KerberosService {
    async validate(username: string, pass: string): Promise<User> {
        try {
            //will throw an exception in case of a failure
            //otherwise returns null
            await checkPassword(username, pass, kService, kDefaultRealm);
            return {username, userId: +new Date()};
        } catch (unauthorized){
            throw new UnauthorizedException(unauthorized.message);
        }
    }
}