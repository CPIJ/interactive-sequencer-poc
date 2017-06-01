const bpm = 128;
let timeMachine

var instrumentGroups = []

var kickPattern = [DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK, DRUMS.KICK]
var snarePattern = [NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE, NONE, DRUMS.SNARE]

function preload() {
    this.instrumentGroups.push(new InstrumentGroup([kickPattern, snarePattern]))
    this.timeMachine = new TimeMachine(bpm)
}

function setup() {
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
