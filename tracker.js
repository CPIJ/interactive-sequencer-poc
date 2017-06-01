class Tracker {

    constructor(videoElement) {
        this.colorTracker = new tracking.ColorTracker(['yellow'])
        this.videoElement = videoElement
    }

    onTrack(callback) {
        this.colorTracker.on('track', function (event) {
            if (event.data.length === 0) {
            } else {
                event.data.forEach(function (rect) {
                    callback(rect)
                });
            }
        });

        tracking.track(this.videoElement, this.colorTracker);
    }
}
