import { Injectable } from '@nestjs/common';
import { renderFile } from 'ejs';
import * as fs from 'fs';

const puppeteer = require('puppeteer');
const locateChrome = require('locate-chrome');

@Injectable()
export class InvoiceService {
  constructor() {}
  async createInvoice(data: any) {
    const content = await renderFile(__dirname + `/template/invoice.ejs`, data);

    const executablePath = await new Promise((resolve) =>
      locateChrome((arg) => resolve(arg)),
    );

    let browser =
      process.env.NODE_ENV === 'production'
        ? await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
            ignoreHTTPSErrors: true,
            dumpio: false,
          })
        : await puppeteer.launch({
            headless: true,
            executablePath,
          });

    const page = await browser.newPage();
    await page.setContent(content, { waitUntil: 'networkidle0' });

    const filePath = 'public/invoices';
    const fileName = 'invoice.pdf';

    const buffer = await page.pdf({
      format: 'A4',
      displayHeaderFooter: true,
      printBackground: true,
    });

    await new Promise((resolve, reject) => {
      fs.mkdir(filePath, function () {
        fs.writeFile(`${filePath}/${fileName}`, buffer, function (err) {
          if (err) {
            console.log('err', err);
            reject(err);
          }
          resolve('');
        });
      });
    });
  }
}
