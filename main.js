const BPM = 128;
let beatMachine

var instrumentGroups = []

var kickPattern = [DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK]
var snarePattern = [NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE]

function preload() {
    this.instrumentGroups.push(new InstrumentGroup([kickPattern, snarePattern]))
    this.beatMachine = new BeatMachine(BPM)
    tracker = new Tracker(document.getElementById('myVideo'))
    VideoPlayer.setup(document.getElementById('myVideo'))
}

function mousePressed() {
    if (this.beatMachine.isPlaying) {
        this.beatMachine.stop()

        this.instrumentGroups.forEach((instrumentGroup) => {
            instrumentGroup.reset()
        }, this)

    } else {
        this.beatMachine.start()
    }
}

function setup() {
    createCanvas(500, 500)

    // This function is called when an object is tracked.
    tracker.onTrack(e => {

        clear()
        rect(e.x, e.y, e.width, e.height)

    })

    // This function is called when time ticks. (based on bpm)
    this.beatMachine.onTick(() => {

        this.instrumentGroups.forEach((instrumentGroup) => {
            instrumentGroup.playNext()
        }, this)

    })
}

