import { Body, Controller, Post } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthBodyType, AuthResponseType, RESPONSE_STATUS } from "./authentication.types";


@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {
  }

  @Post()
  async authenticateByNameAndPass(@Body() body: AuthBodyType): Promise<AuthResponseType> {
    const isValid = await this.authService.isValid(body.username, body.password);

    if (isValid) {
      return { status: RESPONSE_STATUS.SUCCESS };
    }

    return { status: RESPONSE_STATUS.ERROR };
  }
}
