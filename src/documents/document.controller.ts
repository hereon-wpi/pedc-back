import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateDocumentDTO, UpdateDocumentDTO } from "./document.dto";
import { DocumentService } from "./document.service";


@Controller("documents")
export class DocumentController {
  private items = [];

  constructor(
    private readonly documentService: DocumentService
  ) {
  }

  @Post()
  async create(@Body() dto: CreateDocumentDTO): Promise<any> {
    return this.documentService.create(dto);
  }

  @Get()
  async findAll(): Promise<any> {
    return this.documentService.findAll();
  }

  @Get(":id")
  async findOne(@Param('id') id: string): Promise<any> {
    return this.documentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDocumentDTO) {
    return this.documentService.updateOne(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentService.removeOne(id);
  }
}
