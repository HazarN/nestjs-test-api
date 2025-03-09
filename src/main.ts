import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/modules/app.module';

(async function fireUp() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 4321;

  await app.listen(PORT, () =>
    console.log(`\nServer is running on port ${PORT}...`),
  );
})();
