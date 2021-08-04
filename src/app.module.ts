import { Module } from '@nestjs/common';
import { TemplateController } from "./templates/template.controller";
import { DocumentController } from "./documents/document.controller";

@Module({
  imports: [],
  controllers: [
    TemplateController,
    DocumentController,
  ],
  providers: [
  // Put services here
  ],
})
export class AppModule {}
