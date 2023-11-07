<template>
    <div>
        <video id="qr-video" ref="qrVideo" autoplay></video>
    </div>
</template>
  
<script>
import jsQR from 'jsqr';

export default {
    mounted() {
        this.setupCamera();
    },
    methods: {
        setupCamera() {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
                navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
                    .then(stream => {
                        // ... rest of the stream handling code
                    })
                    .catch(error => {
                        console.error('Error accessing the camera', error);
                        // Handle the error. Inform the user if permissions are missing or if HTTPS is required.
                    });
            } else {
                console.error('getUserMedia is not supported in this browser.');
                // Inform the user that their browser does not support this feature
            }
        },
        startScanning() {
            const canvasElement = document.createElement('canvas');
            const canvas = canvasElement.getContext('2d');

            // Continuously capture frames from the video stream
            const scan = () => {
                if (this.$refs.qrVideo.readyState === this.$refs.qrVideo.HAVE_ENOUGH_DATA) {
                    canvasElement.height = this.$refs.qrVideo.videoHeight;
                    canvasElement.width = this.$refs.qrVideo.videoWidth;
                    canvas.drawImage(this.$refs.qrVideo, 0, 0, canvasElement.width, canvasElement.height);
                    const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height, {
                        inversionAttempts: 'dontInvert',
                    });

                    if (code) {
                        console.log('Found QR code', code.data);
                        // Stop scanning once the QR code is found
                        this.$refs.qrVideo.srcObject.getTracks().forEach(track => track.stop());
                        // Handle the QR code data...
                    } else {
                        // If no QR code found, continue scanning
                        requestAnimationFrame(scan);
                    }
                } else {
                    // If the video is not ready, try again shortly
                    requestAnimationFrame(scan);
                }
            };

            // Start scanning
            requestAnimationFrame(scan);
        },
    },
};
</script>
  