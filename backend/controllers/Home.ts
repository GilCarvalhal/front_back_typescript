import { Request, Response } from "express";

const index = function (request: Request, response: Response) {
  response.send("Teste");
};

export { index };
