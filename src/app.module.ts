import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL_CONNECTION || 'mongodb://127.0.0.1:27017/user-manage'),
    UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

