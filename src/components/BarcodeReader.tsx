import React, { useState } from 'react'
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { IonButton } from '@ionic/react';

const BarcodeReader: React.FC = () => {
  const [code, setCode] = useState<String>();

  const openScanner = async () => {
    const data = await BarcodeScanner.scan();
    setCode(data.text);
  };

  return (
    <>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
        <div>scandata: {code}</div>
    </>
  );
};

export default BarcodeReader;