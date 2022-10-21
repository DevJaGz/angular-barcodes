import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { FormsModule } from '@angular/forms';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { LibHtml5qrcodeScannerComponent } from './components/lib-html5qrcode-scanner/lib-html5qrcode-scanner.component';
import { LibNgxBarcodeScannerComponent } from './components/lib-ngx-barcode-scanner/lib-ngx-barcode-scanner.component';
import { LibZxingScannerComponent } from './components/lib-zxing-scanner/lib-zxing-scanner.component';

@NgModule({
  declarations: [
    AppComponent,
    LibNgxBarcodeScannerComponent,
    LibHtml5qrcodeScannerComponent,
    LibZxingScannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BarcodeScannerLivestreamModule,
    ZXingScannerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
