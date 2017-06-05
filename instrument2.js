class Instrument {

    constructor(pattern) {
        // The locations of the soundfiles
        this.soundFile = ['1', '2', '3']

        // Pattern that is going to be played.
        // Consists of ordered indexes of the soundFile array.
        // These are played in order, based on currentIndex.
        this.pattern = (pattern == undefined ? [] : pattern)
    }

    setPattern(pattern) {
        this.pattern = pattern
    }

    play(beatCount) {
        let index = this.pattern[beatCount]
        console.log(this.soundFile[index])
    }
}