import { AfterViewInit, Component, OnInit } from '@angular/core';
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner, Html5QrcodeSupportedFormats } from 'html5-qrcode';

// To use Html5Qrcode (more info below)

@Component({
  selector: 'app-lib-html5qrcode-scanner',
  templateUrl: './lib-html5qrcode-scanner.component.html',
  styleUrls: ['./lib-html5qrcode-scanner.component.scss'],
})
export class LibHtml5qrcodeScannerComponent implements OnInit, AfterViewInit {
  html5QrcodeScanner!: Html5QrcodeScanner;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const formatsToSupport = [
      Html5QrcodeSupportedFormats.QR_CODE,
      Html5QrcodeSupportedFormats.UPC_A,
      Html5QrcodeSupportedFormats.UPC_E,
      Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
    ];
    this.html5QrcodeScanner = new Html5QrcodeScanner(
      'reader',
      {
        fps: 10,
        qrbox: { width: 250, height: 250 },
        formatsToSupport,
      } as any,
      false
    );
    this.html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
  }

  onScanSuccess(decodedText: any, decodedResult: any) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
  }

  onScanFailure(error: any) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }
}
