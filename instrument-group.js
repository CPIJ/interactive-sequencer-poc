class InstrumentGroup {

    constructor(bluePrints) {
        this.instruments = this.loadInstruments(bluePrints)
    }

    loadInstruments(bluePrints) {
        let instruments = []

        bluePrints.forEach((bluePrint) => {
            instruments.push(new Instrument(bluePrint))
        }, this);

        return instruments
    }

    playNext() {
        this.instruments.forEach((instrument) => {
            instrument.playNext()
        }, this);
    }

    reset() {
        this.instruments.forEach((instrument) => {
            instrument.reset()
        }, this);
    }
}