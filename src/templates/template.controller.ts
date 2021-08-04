import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { mockItems } from "./template.mock";

class CreateTemplateDto {
  title: string;
  blocks: any;
}

// class UpdateTemplateDto {
//   id: string;
//   title: string;
//   blocks: any;
// }

@Controller("templates")
export class TemplateController {
  private items = mockItems;

  constructor() {
  }

  @Post()
  async create(@Body() templateDto: CreateTemplateDto): Promise<any> {
    const id = String(Date.now());

    this.items.push({ id, ...templateDto});

    return id;
  }

  @Get()
  async findAll(): Promise<any> {
    return this.items;
  }

  // @Get(":id")
  // async findOne(@Param() params): Promise<any> {
  //   return items.find((item) => item.id === params.id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() templateDto: UpdateTemplateDto) {
  //   items = items.map((item) => {
  //     if(item.id === id){
  //       return { ...item, ...templateDto };
  //     }
  //
  //     return item;
  //   });
  //
  //   return items;
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.items = this.items.filter(item => item.id !== id);

    return this.items;
  }
}
