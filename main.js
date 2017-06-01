const BPM = 128

// var instrumentGroups = []
// var kickPattern = [DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK]
// var snarePattern = [NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE]

let beatMachine
let instruments = []

function preload() {
    // this.instrumentGroups.push(new InstrumentGroup([kickPattern, snarePattern]))
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

        // Methode waarin ontdekt wordt waar de objecten zich bevinden.
        // Op basis hiervan arrays genereren die afgespeeld kunnen worden in de 
        // onTick() methode hieronder.

    })

    // This function is called when time ticks. (based on bpm)
    this.beatMachine.onTick(() => {

        // TODO: Vervangen door een methode die niet afhankelijk is van statische arrays.
        //
        // this.instrumentGroups.forEach((instrumentGroup) => {
        //     instrumentGroup.playNext()
        // }, this)

    })
}

