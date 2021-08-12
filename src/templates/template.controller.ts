import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateTemplateDto } from "./template.dto";
import { TemplateService } from "./template.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";


@Controller("templates")
export class TemplateController {
  constructor(
    private readonly templateService: TemplateService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() templateDto: CreateTemplateDto): Promise<any> {
    return this.templateService.create(templateDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<any> {
    return this.templateService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.templateService.removeOne(id);
  }
}
