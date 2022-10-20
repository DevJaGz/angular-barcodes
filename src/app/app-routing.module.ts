import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibNgxBarcodeScannerComponent } from './components/lib-ngx-barcode-scanner/lib-ngx-barcode-scanner.component';

export enum Paths {
  ngxBarcodeScanner = 'ngx-barcode-scanner',
}

const routes: Routes = [
  {
    path: Paths.ngxBarcodeScanner,
    component: LibNgxBarcodeScannerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
