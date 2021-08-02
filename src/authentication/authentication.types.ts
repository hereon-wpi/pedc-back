export interface AuthBodyType {
  username: string;
  password: string;
}

export enum RESPONSE_STATUS {
  ERROR,
  SUCCESS,
}

export interface AuthResponseType {
  status: RESPONSE_STATUS
}
