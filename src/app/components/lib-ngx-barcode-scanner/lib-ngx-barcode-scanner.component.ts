import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BarcodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-lib-ngx-barcode-scanner',
  templateUrl: './lib-ngx-barcode-scanner.component.html',
  styleUrls: ['./lib-ngx-barcode-scanner.component.scss'],
})
export class LibNgxBarcodeScannerComponent implements OnInit, AfterViewInit {
  @ViewChild(BarcodeScannerLivestreamComponent)
  barcodeScanner!: BarcodeScannerLivestreamComponent;

  barcodeValue: any;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    console.log('onValueChanges result:', result);

    this.barcodeValue = result.codeResult.code;
  }

  onStarted(started: any) {
    console.log('onStarted started:', started);
  }
}
