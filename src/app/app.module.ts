import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { LibNgxBarcodeScannerComponent } from './components/lib-ngx-barcode-scanner/lib-ngx-barcode-scanner.component';
import { LibHtml5qrcodeScannerComponent } from './components/lib-html5qrcode-scanner/lib-html5qrcode-scanner.component';

@NgModule({
  declarations: [AppComponent, LibNgxBarcodeScannerComponent, LibHtml5qrcodeScannerComponent],
  imports: [BrowserModule, AppRoutingModule, BarcodeScannerLivestreamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
