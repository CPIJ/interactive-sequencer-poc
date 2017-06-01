class VideoPlayer {
    static setup(videoElement) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                videoElement.src = window.URL.createObjectURL(stream);
                videoElement.play();
            });
        }
    }
}