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

    determineModules(object) {
        // Creates the modules needed to play sound.
        // This is based on the location of the given object.

        // Overrides where change has happened. 
        // (places a note where a yellow label is, removes one where no label is present.)
        // If there is no change, nothing happens.
    }
}
