import { Injectable } from "@nestjs/common";
import { ApplicationDtoType } from "./application.types";

@Injectable()
export class ApplicationService {
  async getMockData(): Promise<ApplicationDtoType[]> {
    return Promise.resolve([
      { id: 10, title: "Application #1", text: "Text #1" },
      { id: 20, title: "Application #2", text: "Text #2" },
      { id: 30, title: "Application #3", text: "Text #3" }
    ]);
  }

  async isValidUserId(id: string): Promise<boolean> {
    return Promise.resolve(id === "1");
  }
}
