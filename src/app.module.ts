import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClipboardModule } from './clipboard/clipboard.module';

@Module({
  imports: [DatabaseModule, ClipboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
