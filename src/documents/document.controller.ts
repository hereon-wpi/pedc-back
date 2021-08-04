import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

class CreateDocumentDTO {
  title: string;
  blocks: any;
}

class UpdateDocumentDTO {
  id: string;
  title: string;
  blocks: any;
}


@Controller("documents")
export class DocumentController {
  private items = [];

  constructor() {
  }

  @Post()
  async create(@Body() dto: CreateDocumentDTO): Promise<any> {
    const id = String(Date.now());

    this.items.push({ id, ...dto});

    return id;
  }

  @Get()
  async findAll(): Promise<any> {
    return this.items;
  }

  @Get(":id")
  async findOne(@Param() params): Promise<any> {
    return this.items.find((item) => item.id === params.id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDocumentDTO) {
    this.items = this.items.map((item) => {
      if(item.id === id){
        return { ...item, ...dto };
      }

      return item;
    });

    return this.items;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.items = this.items.filter(item => item.id !== id);

    return this.items;
  }
}
