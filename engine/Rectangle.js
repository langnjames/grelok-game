/**
 * A component for rectangle creation at the engine-level
 */

class Rectangle extends Component {
    /* The name of the rect, defaults to rectangle. */  
    name = "Rectangle"

    /*  The fill color of the rect, defaults to white. */
    fillStyle
        
    /* The color of the stroke for the rect, defaults to transparent. */
    strokeStyle

    /* The width of the stroke for the rect, defaults to 1. */
    lineWidth

    /**
     * Create a rectangle component
     * @param {Color} fillStyle Optional color for fillstyle
     * @param {Color} strokeStyle Optional color for outlines of rect
     * @param {Number} lineWidth Optional size for width of outline
     */
    constructor(fillStyle = "white", strokeStyle = "transparent", lineWidth = 1){
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
    }

    /** 
    * Draws the rectangle to the canvas
    * @param {2DContext} ctx The context to draw to.
    */
    draw(ctx){
        /* Sets the style that was given to values in constructor */
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth

        /* Draw the rectangle */
        ctx.beginPath()
        ctx.rect(-this.transform.sx/2 + this.transform.x, -this.transform.sy/2 + this.transform.y, this.transform.sx, this.transform.sy)  
        ctx.fill()
        ctx.stroke()
    }
}

/* This adds the rectangle to the global namespace to be called in different areas */
window.Rectangle = Rectangle