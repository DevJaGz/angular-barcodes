import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarcodeScannerLivestreamModule } from 'ngx-barcode-scanner';

import { LibNgxBarcodeScannerComponent } from './components/lib-ngx-barcode-scanner/lib-ngx-barcode-scanner.component';

@NgModule({
  declarations: [AppComponent, LibNgxBarcodeScannerComponent],
  imports: [BrowserModule, AppRoutingModule, BarcodeScannerLivestreamModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
