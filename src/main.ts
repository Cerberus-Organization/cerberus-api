import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // **Swagger Setup**
  const config = new DocumentBuilder()
    .setTitle('Cerberus API')
    .setDescription('https://github.com/Cerberus-Organization')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory, {
    //customCssUrl: '/themes/swagger-dark-theme.css',
    customSiteTitle: 'Cerberus API',
  });

  // **Swagger Setup**

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
