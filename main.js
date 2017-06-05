const BPM = 128
let beatMachine
var modules = []

function preload() {
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
    this.modules.push(new Module(width / 2, height / 2, 500, 500))

    // This function is called when an object is tracked.
    tracker.onTrack(trackingData => {

        // tmp
        fill(255, 204, 0)
        clear()
        rect(trackingData.x, trackingData.y, trackingData.width, trackingData.height)

        // Methode waarin ontdekt wordt waar de objecten zich bevinden.
        // Op basis hiervan arrays genereren die afgespeeld kunnen worden in de 
        // onTick() methode hieronder.
        modules.forEach((module) => {
            module.update(trackingData)
        });
    })

    // This function is called when time ticks. (based on bpm)
    this.beatMachine.onTick(() => {

        // TODO: Vervangen door een methode die niet afhankelijk is van statische arrays.
        //
        // this.modules.forEach((module) => {
        //     module.playNext()
        // })
    })
}

function draw() {
    this.modules.forEach((module) => {
        module.show()
    })
}

