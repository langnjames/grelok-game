/**
 * Engine-level text component
 */
class Text extends Component {
    /** The name of the text component */
    name = "Text"
    /** The color of the text component */
    fillStyle
    /** The string for the text component */
    string 
    /** The font to be used for the text component */
    font
    /**
     * Creates a text component
     * Used for adding text to the gameObject
     * @param {String} string text that will be written out
     * @param {Color} fillStyle color that it will be displayed with, default: white
     * @param {String} font what font will be used, defaults to 20px arial
     */
    constructor(string, fillStyle="white", font="20px Arial"){
        super()
        this.fillStyle = fillStyle
        this.string = string
        this.font = font
    }

    /**
     * Draw the text the the given canvas context
     * @param {2DContext} ctx 
     */
    draw(ctx){
        /** Sets all parameters for the text and draws it */
        ctx.fillStyle = this.fillStyle
        ctx.font = this.font
        ctx.fillText(this.string, this.transform.x, this.transform.y)
    }
}

/** This adds Text to the global namespace to be called in different areas */
window.Text = Text