import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
