/**
 * Engine-level Camera component
 */
class Camera extends Component{
    /** Name of the camera component */
    name = "Camera"

    /** This is the fill color for the camera component */
    fillStyle

    /**
     * Creates a camera component
     * fillStyle param allows for changing of color for camera
     * @param {Color} fillStyle 
     */
    constructor(fillStyle = "white"){
        super()
        this.fillStyle = fillStyle
    }

    /**
     * Draws the camera component to the canvas context given
     * @param {2DContext} ctx 
     */
    draw(ctx) { 
        /** Sets the color of the component */
        ctx.fillStyle = this.fillStyle

        /** Draws the camera */
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
}

/** Adds the camera to the global namespace */
window.Camera = Camera