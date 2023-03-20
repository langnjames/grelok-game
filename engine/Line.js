/**
 * A line engine-level component
 */
class Line extends Component {
    // Name of the component
    name = "Line"

    // The color of the stroke, defaults to transparent.
    strokeStyle

    // The width of the stroke, defaults to 1.
    lineWidth

    /**
     * Create a line component
     * @param {Color} strokeStyle Optional color for outlines of rect
     * @param {Number} lineWidth Optional size for width of outline
     */
    constructor(strokeStyle = "transparent", lineWidth = 1){
        super()
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
    }

    /**
     *  Draw the line to the canvas
     *  @param {2DContext} ctx The context to draw to
     */
    draw(ctx){
        // Set the style for the line being drawn
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth

        let startX = -Math.cos(this.transform.r) * this.transform.sx + this.transform.x
        let startY = -Math.sin(this.transform.r) * this.transform.sy + this.transform.y 

        let endX = Math.cos(this.transform.r) * this.transform.sx + this.transform.x
        let endY = Math.sin(this.transform.r) * this.transform.sy + this.transform.y 

        // Draw the line
        ctx.beginPath()
        ctx.moveTo(endX, endY)
        ctx.lineTo(startX, startY)
        ctx.stroke()
    }
}

// Adds the line to the global namespace
window.Line = Line