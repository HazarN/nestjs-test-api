import { Controller, Get } from '@nestjs/common';

import { AppService } from '@/services/app.service';
import { Message } from '@/types/message';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping')
  public ping(): Message {
    return { message: this.appService.getPong() };
  }
}
