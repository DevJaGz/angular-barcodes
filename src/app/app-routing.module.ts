import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibHtml5qrcodeScannerComponent } from './components/lib-html5qrcode-scanner/lib-html5qrcode-scanner.component';
import { LibNgxBarcodeScannerComponent } from './components/lib-ngx-barcode-scanner/lib-ngx-barcode-scanner.component';
import { LibZxingScannerComponent } from './components/lib-zxing-scanner/lib-zxing-scanner.component';

export enum Paths {
  ngxBarcodeScanner = 'ngx-barcode-scanner',
  html5qrcodeScanner = 'html5qrcode-scanner',
  zxingScanner = 'zxingScanner',
}

const routes: Routes = [
  {
    path: Paths.ngxBarcodeScanner,
    component: LibNgxBarcodeScannerComponent,
  },
  {
    path: Paths.html5qrcodeScanner,
    component: LibHtml5qrcodeScannerComponent,
  },
  {
    path: Paths.zxingScanner,
    component: LibZxingScannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
