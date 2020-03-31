import React from 'react'
import { useCamera, availableFeatures } from '@ionic/react-hooks/camera';
import { CameraResultType } from "@capacitor/core";
import { IonButton } from '@ionic/react';

interface RunCameraProps { }

const RunCamera: React.FC<RunCameraProps> = () => {
    const { photo, getPhoto } = useCamera();

    const handleTakePhoto = () => {
        if(availableFeatures.getPhoto) {
            getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.DataUrl
            });
        };
    };

    console.log(photo);

    return (
        availableFeatures.getPhoto ? (
            <div>
                <div><IonButton onClick={handleTakePhoto}>Take Photo</IonButton></div>
                <div>{photo && <img alt="" src={photo.dataUrl} />}</div>
            </div>
        ) :
            <div>Camera not available on this platform</div>
    );
}

export default RunCamera;