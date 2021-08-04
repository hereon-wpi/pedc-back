import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateTemplateDto } from "./template.dto";
import { TemplateService } from "./template.service";


@Controller("templates")
export class TemplateController {
  constructor(
    private readonly templateService: TemplateService
  ) {
  }

  @Post()
  async create(@Body() templateDto: CreateTemplateDto): Promise<any> {
    return this.templateService.create(templateDto);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.templateService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    return this.templateService.removeOne(id);
  }
}
