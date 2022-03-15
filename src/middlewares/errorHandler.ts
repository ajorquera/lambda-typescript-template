import { ErrorRequestHandler } from "express";
import { StatusCodes } from "http-status-codes";

const errorHandler: ErrorRequestHandler = (
  error: ErrorType,
  _req,
  res,
  _next
) => {
  console.error(error);

  res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
};

export default errorHandler;
