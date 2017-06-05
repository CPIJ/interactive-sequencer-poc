class Instrument {

    constructor(pattern) {
        // The locations of the soundfiles are loaded in memory.
        this.soundFile = this.loadSounds(['sounds/909/kick.wav'])

        // Pattern that is going to be played.
        // Consists of ordered indexes of the soundFile array.
        // These are played in order, based on currentIndex.
        this.pattern = new Array(4)
        console.log(this.pattern)
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

        console.log(sounds)

        return sounds
    }
}