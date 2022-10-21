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

  ngOnInit(): void {
    if (!navigator.mediaDevices?.enumerateDevices) {
      console.log('enumerateDevices() not supported.');
    } else {
      // List cameras and microphones.
      navigator.mediaDevices
        .enumerateDevices()
        .then((devices) => {
          devices.forEach((device) => {
            console.log(
              `${device.kind}: ${device.label} id = ${device.deviceId}`
            );
          });
        })
        .catch((err) => {
          console.error(`${err.name}: ${err.message}`);
        });
    }
  }

  ngAfterViewInit() {
    this.barcodeScanner.config = {
      decoder: {
        debug: {
          drawBoundingBox: true,
        },
      },
    };
    this.barcodeScanner.start();
  }

  onValueChanges(result: any) {
    console.log('onValueChanges result:', result);
    this.barcodeScanner.stop();
    this.barcodeValue = result.codeResult.code;
    setTimeout(() => {
      this.barcodeScanner.start();
    }, 4000);
  }

  onStarted(started: any) {
    console.log('onStarted started:', started);
  }
}
