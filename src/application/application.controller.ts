import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApplicationService } from "./application.service";
import { ApplicationResponseType, RESPONSE_STATUS } from "./application.types";


@Controller("application")
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {
  }

  @Get()
  async getData(): Promise<any> {
    return {
      status: RESPONSE_STATUS.SUCCESS,
      data: 'Bingo'
    };
  }

  @Post()
  async getAllByUserId(@Body() body: { id: string }): Promise<ApplicationResponseType> {
    const isValidUserId = await this.applicationService.isValidUserId(body.id);

    if (isValidUserId) {
      const applications = await this.applicationService.getMockData();

      return {
        status: RESPONSE_STATUS.SUCCESS,
        data: applications
      };
    }

    return {
      status: RESPONSE_STATUS.ERROR,
      data: []
    };
  }
}
