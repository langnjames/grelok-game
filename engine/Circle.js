/**
 * A circle engine-level component
 */
class Circle extends Component {
  /** The name of the component */
  name = "Circle"

  /** The fill color of the component */
  fillStyle = "white"

  // The color of the stroke for the circle, defaults to transparent.
  strokeStyle

  // The width of the stroke for the circle, defaults to 1.
  lineWidth

  /**
   * Create a rectangle component
   * @param {Color} fillStyle Optional color for fillstyle
   * @param {Color} strokeStyle Optional color for outlines of rect
   * @param {Number} lineWidth Optional size for width of outline
   */
  constructor(fillStyle = "white", strokeStyle = "transparent", lineWidth = 1) {
    super()
    this.fillStyle = fillStyle
    this.strokeStyle = strokeStyle
    this.lineWidth = lineWidth
  }

  /**
   * Draw the circle.
   * @param {2D Context} ctx The context to draw to 
   */
  draw(ctx) {
    //Set the fill style
    ctx.fillStyle = this.fillStyle
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth

    // Draw the circle
    ctx.beginPath()
    ctx.arc(this.transform.x, this.transform.y, this.transform.sx, 0, Math.PI * 2)
    ctx.fill()
    ctx.stroke()
  }
}

// This adds the circle to the global namespace to be called in different areas
window.Circle = Circle;