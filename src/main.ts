import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


import 'dotenv/config'
import { AppModule } from './app.module';

const { PORT } = process.env

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Social Network API docs')
    .setDescription(`Social networking`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();

  await app.listen(PORT || 8080);
}
bootstrap();
