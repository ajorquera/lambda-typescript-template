import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error: ErrorType, _req, res, _next) => {

  console.error(error);

  res.status(500).end();
};

export default errorHandler;