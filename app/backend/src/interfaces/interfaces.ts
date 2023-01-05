export interface IUser {
  username: string,
  email: string,
  password: string
};

export interface IServiceResponse {
  status: number,
  message: object,
};

export interface ICatchedError {
  status: number,
  error: string
};
