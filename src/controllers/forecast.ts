import { Get, Controller } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2020-04-26T00:00:00+00:00',
      },
    ]);
  }
}
