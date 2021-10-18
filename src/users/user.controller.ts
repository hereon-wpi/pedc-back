import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { UserService } from "./user.service";
import { UpdateUserDTO } from "./user.dto";


@Controller("users")
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param('id') id: string): Promise<any> {
    return this.userService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/attach')
  async update(@Body() dto: UpdateUserDTO) {
    if(dto.userId && dto.docId){
      return this.userService.updateDocs(dto.userId, dto.docId);
    }

    if(dto.userId && dto.role){
      return this.userService.updateRole(dto.userId, dto.role)
    }

    return this.userService.findOne(dto.userId);
  }
}
