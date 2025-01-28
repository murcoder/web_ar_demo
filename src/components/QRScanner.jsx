import { Html5Qrcode } from 'html5-qrcode';
import { useEffect } from 'react';

const QRScanner = ({ onScanSuccess }) => {
  useEffect(() => {
    const html5QrCode = new Html5Qrcode('reader');
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      // Handle the decoded text or result here
      onScanSuccess(decodedText);
    };
    const config = { fps: 10, qrbox: { width: 250, height: 250 } };

    // Start scanning
    html5QrCode.start({ facingMode: 'environment' }, config, qrCodeSuccessCallback).catch((err) => {
      console.error('Unable to start scanning.', err);
    });

    return () => {
      html5QrCode.stop().catch((err) => {
        console.error('Unable to stop scanning.', err);
      });
    };
  }, [onScanSuccess]);

  return <div id="reader" style={{ width: '300px', height: '300px' }} />;
};

export default QRScanner;
