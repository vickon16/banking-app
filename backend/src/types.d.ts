declare namespace Express {
  export interface Request {
    user?: {
      userName: string;
      sub: number;
    };
  }
}
