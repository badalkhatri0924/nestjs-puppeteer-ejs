import { Body, Controller, Post } from '@nestjs/common';
import { InvoiceService } from './invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  // Refer invoice.json for types
  @Post()
  generateInvoice(@Body() data: any) {
    this.invoiceService.createInvoice(data);
  }
}
