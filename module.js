class Module {

    constructor(x, y, w, h, i) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.instruments = (i == undefined ? [] : i)
        this.regions = this.createRegions()
    }

    update(trackingData) {
        this.regions.forEach((region) => {
            if (region.collidesWith(trackingData)) {
                this.instruments[0].setAt(region.id)
                region.isLocked = true
            } else if (!region.isLocked) {
                this.instruments[0].disableAt(region.id)
            }
        })

        return this.instruments[0].pattern;
    }

    playNext(beatIndex) {
        this.instruments.forEach((instrument) => {
            instrument.play(beatIndex)
            this.regions[beatIndex].isLocked = false
        });
    }

    show() {
        clear()
        noFill()
        ellipseMode(CENTER)

        ellipse(this.x, this.y, this.width, this.height)

        this.regions.forEach((region) => {
            if (region.isLocked) {
                fill(255, 204, 0);
            }
            ellipse(region.x, region.y, region.width, region.height)
        })
    }

    createRegions() {
        return [
            new Region(0, this.height / 2, 50),
            new Region(1, 450, this.width / 2),
            new Region(2, this.height / 2, 450),
            new Region(3, 50, this.height / 2)
        ]
    }
}