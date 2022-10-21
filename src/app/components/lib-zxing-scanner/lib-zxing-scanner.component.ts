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
  device: MediaDeviceInfo = {
    deviceId:
      '2e39b171f483d87c11d1f7604c2e1def4c18ef42c7763e2db236ba320be3deeb',
    kind: 'videoinput',
    label: 'USB2.0 HD UVC WebCam (13d3:56a2)',
  } as MediaDeviceInfo;
  squareShape = true;
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
    BarcodeFormat.ITF,
  ];

  constructor(private _cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.scanner.camerasFound.subscribe({
      next: (e: MediaDeviceInfo[]) => {
        if (e) {
          const val = e.find(
            (v) => v.deviceId === this.device.deviceId
          ) as MediaDeviceInfo;
          setTimeout(() => {
            this.device = val;
            this._cdRef.detectChanges();
          }, 100);
        }
      },
    });
    // ZXingScannerComponent.prototype.getAnyVideoDevice =
    //   (): Promise<MediaStream> => {
    //     return navigator.mediaDevices.getUserMedia({
    //       audio: false,
    //       video: {
    //         width: { min: 640, ideal: 1920 },
    //         height: { min: 400, ideal: 1080 },
    //         aspectRatio: { ideal: 1.7777777778 },
    //       },
    //     });
    //   };
    // BrowserCodeReader.prototype.decodeFromVideoDevice = async function (
    //   deviceId: string | undefined,
    //   previewElem: string | HTMLVideoElement | undefined,
    //   callbackFn: any
    // ): Promise<IScannerControls> {
    //   // We had to comment this out because it is a private method...
    //   // BrowserCodeReader.checkCallbackFnOrThrow(callbackFn);
    //   let videoConstraints: MediaTrackConstraints;
    //   if (!deviceId) {
    //     videoConstraints = { facingMode: 'environment' };
    //   } else {
    //     videoConstraints = {
    //       deviceId: { exact: deviceId },
    //       width: { min: 640, ideal: 1920 },
    //       height: { min: 400, ideal: 1080 },
    //       aspectRatio: { ideal: 1.7777777778 },
    //     };
    //   }
    //   const constraints: MediaStreamConstraints = { video: videoConstraints };
    //   return await this.decodeFromConstraints(
    //     constraints,
    //     previewElem,
    //     callbackFn
    //   );
    // };
    // BrowserCodeReader.createBinaryBitmapFromCanvas = (
    //   canvas: HTMLCanvasElement
    // ): BinaryBitmap => {
    //   const cameraCanvasImageWidth = canvas.width;
    //   const cameraCanvasImageHeight = canvas.height;
    //   const videoElementHeight = (
    //     document.querySelector('zxing-scanner video') as any
    //   ).offsetHeight;
    //   const videoElementWidth = (
    //     document.querySelector('zxing-scanner video') as any
    //   ).offsetWidth;
    //   let factor = 1;
    //   if (videoElementWidth > videoElementHeight) {
    //     factor = cameraCanvasImageWidth / videoElementWidth;
    //   } else {
    //     factor = cameraCanvasImageHeight / videoElementHeight;
    //   }
    //   const width = Math.floor((this.squareShape ? 250 : 450) * factor);
    //   const height = Math.floor((this.squareShape ? 250 : 200) * factor);
    //   const left = (cameraCanvasImageWidth - width) / 2;
    //   const top = (cameraCanvasImageHeight - height) / 2;
    //   const croppedCanvas = document.createElement('canvas');
    //   croppedCanvas.width = width;
    //   croppedCanvas.height = height;
    //   const croppedCanvasContext = croppedCanvas.getContext('2d');
    //   croppedCanvasContext?.rect(0, 0, width, height);
    //   if (croppedCanvasContext?.fillStyle) {
    //     croppedCanvasContext.fillStyle = 'white';
    //   }
    //   croppedCanvasContext?.fill();
    //   croppedCanvasContext?.drawImage(
    //     canvas,
    //     left,
    //     top,
    //     width,
    //     height,
    //     0,
    //     0,
    //     width,
    //     height
    //   );
    //   // These lines can be used to show the cropped part of the image stream that is used
    //   // to find the code and check if the highlighted area matches the cropped image
    //   // (document.getElementById('croppedSvg') as HTMLElement).innerHTML = '';
    //   // const span = document.createElement('span');
    //   // span.textContent = `${cameraCanvasImageWidth} x ${cameraCanvasImageHeight} | ${videoElementWidth} x ${videoElementHeight}`;
    //   // span.style.position = 'absolute';
    //   // span.style.right = `0`;
    //   // span.style.color = 'white';
    //   // span.style.display = 'block';
    //   // (document.getElementById('croppedSvg') as HTMLElement).appendChild(span);
    //   // croppedCanvas.style.marginTop = '20px';
    //   // croppedCanvas.style.transform = `scale(1)`;
    //   // croppedCanvas.style.transformOrigin = `right top`;
    //   // (document.getElementById('croppedSvg') as HTMLElement).appendChild(
    //   //   croppedCanvas
    //   // );
    //   let luminanceSource = new HTMLCanvasElementLuminanceSource(croppedCanvas); // .invert() to support inverted codes
    //   const hybridBinarizer = new HybridBinarizer(luminanceSource);
    //   return new BinaryBitmap(hybridBinarizer);
    // };
    // this.scanner.device = {
    //   deviceId:
    //     '2e39b171f483d87c11d1f7604c2e1def4c18ef42c7763e2db236ba320be3deeb',
    //   groupId:
    //     '54f726762101dce3ae7a0264d0f1560547a8fa398a2fd45d2957e2c83b324033',
    //   kind: 'videoinput',
    //   label: 'USB2.0 HD UVC WebCam (13d3:56a2)',
    // } as MediaDeviceInfo;
  }

  oncamerasFound(cameras: any[]): void {
    this.devices = cameras;
    console.log(cameras);
  }

  scanSuccessHandler(e: any): void {
    console.log(e);
    this.scanner.scanStop();
    setTimeout(() => {
      this.scanner.scanStart();
    }, 4000);
  }

  onChangeSelection(e: any): void {
    if (e.value != undefined) {
      this.scanner.device = this.devices[e.value];
    }
    const codeReader = this.scanner.codeReader;
    const scanFromDeviceObservable = codeReader.scanFromDeviceObservable();

    // console.log(scanFromDeviceObservable);
    // scanFromDeviceObservable
    //   .then((e) => {
    //     console.log(
    //       'scanFromDeviceObservable',
    //       e.subscribe({
    //         next: (s) => {
    //           console.log('subcriber', s);
    //         },
    //       })
    //     );
    //   })
    //   .catch(console.log);
  }
}
