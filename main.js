const BPM = 128
let beatMachine
var modules = []
var beatIndex = 0

function preload() {
    this.beatMachine = new BeatMachine(BPM)

    tracker = new Tracker(document.getElementById('myVideo'))
    VideoPlayer.setup(document.getElementById('myVideo'))
}

function setup() {
    createCanvas(500, 500)
    this.modules.push(new Module(width / 2, height / 2, 500, 500, [new Instrument()]))

    // This function is called when an object is tracked.
    tracker.onTrack(trackingData => {
        modules.forEach((module) => {
            module.update(trackingData)
            module.show()
        });
    })

    // This function is called when time ticks. (based on bpm)
    this.beatMachine.onTick(() => {
        this.modules.forEach((module) => {
            module.playNext(beatIndex)
        })

        increment()
    })
}

function draw() {

    this.modules.map(m => m.show())

    // this.modules.forEach((module) => {
    //     module.show()
    // })
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

function increment() {
    if (beatIndex < 3) {
        beatIndex++
    } else {
        beatIndex = 0
    }
}

