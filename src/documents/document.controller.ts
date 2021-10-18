import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CreateDocumentDTO, UpdateDocumentDTO } from "./document.dto";
import { DocumentService } from "./document.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";


@Controller("documents")
export class DocumentController {
  private items = [];

  constructor(
    private readonly documentService: DocumentService
  ) {
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateDocumentDTO): Promise<any> {
    return this.documentService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(): Promise<any> {
    return this.documentService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOne(@Param('id') id: string): Promise<any> {
    return this.documentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateDocumentDTO) {
    return this.documentService.updateOne(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.documentService.removeOne(id);
  }
}
