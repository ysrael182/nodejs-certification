import { Module } from '@nestjs/common';
import { IndexController } from './controllers/index.controller';
import { AppService } from './app.service';
import { ChatGateway } from './websocket/chat.gateway';

@Module({
  imports: [],
  controllers: [IndexController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
