import { Module } from '@nestjs/common';
import {ApplicationController} from "./application/application.controller";
import {ApplicationService} from "./application/application.service";

@Module({
  imports: [],
  controllers: [
    ApplicationController
  ],
  providers: [
    ApplicationService
  ],
})
export class AppModule {}
