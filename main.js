const BPM = 128;
let timeMachine

var instrumentGroups = []

var kickPattern = [DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK]
var snarePattern = [NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE]

function preload() {
    this.instrumentGroups.push(new InstrumentGroup([kickPattern, snarePattern]))
    this.timeMachine = new TimeMachine(BPM)
    tracker = new Tracker(document.getElementById('myVideo'))
    VideoPlayer.setup(document.getElementById('myVideo'))
}

function setup() {
    createCanvas(500, 500)

    // This function is called when an object is tracked.
    tracker.onTrack(e => {

        clear()
        rect(e.x, e.y, e.width, e.height)

    })

    // This function is called when time ticks. (based on bpm)
    this.timeMachine.onTick(() => {

        this.instrumentGroups.forEach((instrumentGroup) => {
            instrumentGroup.playNext()
        }, this)

    })
}

function mousePressed() {
    if (this.timeMachine.isPlaying) {
        this.timeMachine.stop()

        this.instrumentGroups.forEach((instrumentGroup) => {
            instrumentGroup.reset()
        }, this)

    } else {
        this.timeMachine.start()
    }
}

