class Module {

    constructor(x, y, w, h, i) {
        this.x = x,
            this.y = y,
            this.width = w,
            this.height = h,
            this.instruments = (i == undefined ? [] : i)
        this.regions = this.createRegions()
    }

    update(trackingData) {

        // Determine in wich instrument the data resides.
        // If there is any change, make is so.
        this.regions.forEach((region) => {
            // if the trackingdata resides within the region.
            // Add a note to that index in the array.
            if (region.collidesWith(trackingData)) {
                console.log('collide')
            }
        })
    }


    playNext(beatIndex) {
        this.instruments.forEach((instrument) => {
            instrument.play(beatIndex)
        });
    }

    show() {
        noFill()

        ellipseMode(CENTER)

        ellipse(this.x, this.y, this.width, this.height)
        this.regions.forEach((region) => {
            ellipse(region.x, region.y, region.width, region.height)
        })
    }

    createRegions() {
        return [new Region(this.height / 2, 50),
                new Region(450, this.width / 2),
                new Region(this.height / 2, 450),
                new Region(50, this.height / 2)]
    }
}