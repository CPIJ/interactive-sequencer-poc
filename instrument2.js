class Instrument {

    constructor(pattern) {
        this.soundFile = this.loadSounds(['sounds/909/kick.wav'])
        this.pattern = new Array(4)
    }

    setPattern(pattern) {
        this.pattern = pattern
    }

    setAt(index) {
        this.pattern[index] = 0
    }

    disableAt(index) {
        this.pattern[index] = NONE
    }

    play(beatCount) {
        let index = this.pattern[beatCount]
        const sound = this.soundFile[index]
        if (sound)
            this.soundFile[index].play()
    }

    loadSounds(locations) {
        let sounds = []

        locations.forEach((element) => {
            sounds.push(loadSound(element))
        }, this);

        return sounds
    }
}