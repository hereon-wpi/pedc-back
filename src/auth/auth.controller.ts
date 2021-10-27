import { Controller, Post, Request, UseGuards } from "@nestjs/common";
import { LocalAuthGuard } from "./local-auth.guard";
import { JwtService } from "@nestjs/jwt";


@Controller("auth")
export class AuthController {
  constructor(
    private jwtService: JwtService,
  ) {}

  @UseGuards(LocalAuthGuard) // Check if user exists in LocalStrategy
  @Post('/login')
  async login(@Request() req) {
    const payload = {
      username: req.user.username,
      userId: req.user.userId,
      role: req.user.role,
    };

    return {
      ...payload,
      access_token: this.jwtService.sign(payload)
    };
  }
}
