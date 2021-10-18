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
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateUserDTO) {
    if(dto.attachedDocId){
      return this.userService.updateDocs(id, dto.attachedDocId);
    }

    if(dto.role){
      return this.userService.updateRole(id, dto.role)
    }

    return this.userService.findOne(id);
  }
}
