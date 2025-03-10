import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppController } from '@/controllers/app.controller';
import { ProductModule } from '@/modules/product.module';
import { AppService } from '@/services/app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const MONGO_URI = configService.get<string>('MONGO_URI');

        if (!MONGO_URI)
          throw new Error('Mongo URI is not provided in the .env file');

        return {
          uri: MONGO_URI,
        };
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Module imports
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
