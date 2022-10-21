import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

@Component({
  selector: 'app-lib-zxing-scanner',
  templateUrl: './lib-zxing-scanner.component.html',
  styleUrls: ['./lib-zxing-scanner.component.scss'],
})
export class LibZxingScannerComponent implements OnInit, AfterViewInit {
  @ViewChild('scanner', { static: false }) scanner!: ZXingScannerComponent;
  devices: MediaDeviceInfo[] = [];
  allowedFormats = [
    BarcodeFormat.QR_CODE,
    BarcodeFormat.EAN_13,
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.AZTEC,
    BarcodeFormat.CODABAR,
    BarcodeFormat.CODE_93,
    BarcodeFormat.CODE_39,
    BarcodeFormat.EAN_13,
    BarcodeFormat.EAN_8,
  ];

  constructor(private _cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // this.scanner.device = {
    //   deviceId:
    //     '2e39b171f483d87c11d1f7604c2e1def4c18ef42c7763e2db236ba320be3deeb',
    //   groupId:
    //     '54f726762101dce3ae7a0264d0f1560547a8fa398a2fd45d2957e2c83b324033',
    //   kind: 'videoinput',
    //   label: 'USB2.0 HD UVC WebCam (13d3:56a2)',
    // } as MediaDeviceInfo;
    this._cdRef.detectChanges();
  }

  oncamerasFound(cameras: any[]): void {
    this.devices = cameras;
    console.log(cameras);
  }

  scanSuccessHandler(e: any): void {
    console.log(e);
  }

  onChangeSelection(e: any): void {
    if (e.value != undefined) {
      this.scanner.device = this.devices[e.value];
    }
    console.log(e.value);
  }
}
