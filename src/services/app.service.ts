import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getPong = (): string => 'pong🏓';
}
