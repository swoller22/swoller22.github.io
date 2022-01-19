class Grid {

    constructor(nRows, nCols) {
        this.nRows = nRows
        this.nCols = nCols

        for (let row = 0; row < nRows; row++) {
            for (let col = 0; col < nCols; col++) {

                $(".grid-container").append(`<div id='row${row}col${col}' class='item'></div>`)
            }
        }
    }

    colorBlock(row, col, color) {

        $(`#row${row}col${col}`).css("background-color", color)
    }

    removeColorFromBlock(row, col) {

        $(`#row${row}col${col}`).css("background-color", "white")
    }

    addTower(tower, color) {

        for (let i = 0; i < tower.height; i++) {

            this.colorBlock(this.nRows - 1 - i, tower.col, color)
        }
        for (let i = tower.height; i < this.nRows; i++) {

            this.removeColorFromBlock(this.nRows - 1 - i, tower.col)
        }
    }

    updateColor(tower, color) {

        if(tower===null || tower===undefined) return
        for (let i = 0; i < tower.height; i++) {

            this.colorBlock(this.nRows - 1 - i, tower.col, color)
        }
    }
}

export { Grid }