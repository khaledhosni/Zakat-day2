import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthService } from './auth/auth.service.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [ProductsModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
