import { MY_MESSAGE } from './../env';
import { RequestHandler } from "express";

const helloWorld: RequestHandler = (_req, res, next: NextErrorFn) => {
  try {
    res.json({
      message: MY_MESSAGE
    });
  } catch(e) {
    next({code: 'API_ERROR', data: e});
  }
};

export default helloWorld;