import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductsModule } from './products/products.module.js';
import { AuthController } from './auth/auth.controller.js';
import { AuthService } from './auth/auth.service.js';
import { AuthModule } from './auth/auth.module.js';
import { OrdersController } from './orders/orders.controller.js';
import { OrdersService } from './orders/orders.service.js';
import { OrdersModule } from './orders/orders.module.js';

@Module({
  imports: [ProductsModule, AuthModule, OrdersModule],
  controllers: [AppController, AuthController, OrdersController],
  providers: [AppService, AuthService, OrdersService],
})
export class AppModule {}
