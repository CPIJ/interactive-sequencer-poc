const locations = ['sounds/909/kick.wav', 'sounds/tick.wav', 'sounds/tick.wav', 'sounds/tick.wav', 'sounds/tick.wav']

class Instrument {

    constructor(patternBluePrint) {
        this.soundFiles = this.loadSounds()
        this.pattern = []
        this.currentIndex = 0
    }

    playNext() {
        let sound = this.pattern[this.currentIndex];

        if (sound != null) {
            sound.play()
        }

        this.increment()
    }

    setAt(index) {
        this.pattern[index] = DRUMS.KICK
    }

    disableAt(index) {
        this.pattern[index] = NONE
    }

    increment() {
        if (this.currentIndex < this.pattern.length - 1) {
            this.currentIndex++
        } else {
            this.currentIndex = 0
        }
    }

    loadPattern(patternBluePrint) {
        let p = []

        for (var i = 0; i < patternBluePrint.length; i++) {
            var step = patternBluePrint[i];

            if (step != -1) {
                p[i] = this.soundFiles[step]
            } else {
                p[i] = null
            }
        }

        return p
    }

    loadSounds() {
        let sounds = []

        locations.forEach((element) => {
            sounds.push(loadSound(element))
        }, this);


        return sounds
    }

    reset() {
        this.currentIndex = 0
    }
}