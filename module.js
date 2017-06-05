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
        rect(this.x, this.y, this.width, this.height)
        this.regions.forEach((region) => {
            rect(region.x, region.y, region.width, region.height)
        })
    }

    createRegions() {
        return [new Region(this.x + 100, this.y + 100)]
    }
}