import { Html5QrcodeSupportedFormats } from 'html5-qrcode';

/** Format of detected code. */
export interface QrcodeResultFormat {
  format: Html5QrcodeSupportedFormats;
  formatName: string;
}

/** Detailed scan result. */
export interface QrcodeResult {
  text: string;
  format: QrcodeResultFormat;
}

/** QrCode result object. */
export interface Html5QrcodeResult {
  decodedText: string;
  result: QrcodeResult;
}

export type QrcodeSuccessCallback = (
  decodedText: string,
  result: Html5QrcodeResult
) => void;
