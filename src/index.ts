import * as functions from '@google-cloud/functions-framework';
import { Request, Response } from 'express';

functions.http('helloGET', (req: Request, res: Response) => {
  const num: number = 123;
  console.log(num);
  res.send('Hello World!12345678');
});
