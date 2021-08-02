export enum RESPONSE_STATUS {
  ERROR = 0,
  SUCCESS = 1,
}

export class ApplicationDtoType {
  id: number;
  title: string;
  text: string;
}

export interface ApplicationResponseType {
  status: RESPONSE_STATUS;
  data: ApplicationDtoType[];
}
