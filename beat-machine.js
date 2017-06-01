class BeatMachine {
    constructor(bpm) {
        this.interval = 60000 / bpm
        this.isPlaying = false
    }

    start() {
        this.isPlaying = true
        this.onTick(this.event)
    }

    stop() {
        this.isPlaying = false
    }

    onTick(event) {
        this.event = event
        if (!this.isPlaying) return

        this.event()

        setTimeout(() => {
            this.onTick(event)
        }, this.interval);
    }
}