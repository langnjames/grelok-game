/**
 * A circle engine-level component
 */
class Circle extends Component {
  /** The name of the component */
  name = "Circle"

  /** The fill color of the component */
  fillStyle = "white"

  /**
   * Draw the circle.
   * @param {2D Context} ctx 
   */
  draw(ctx) {
    //Set the fill style
    ctx.fillStyle = this.fillStyle

    // Draw the circle
    ctx.beginPath()
    ctx.arc(this.transform.x, this.transform.y, this.transform.sx, 0, Math.PI * 2)
    ctx.fill()
  }
}

//Add circle to the global namespace.
window.Circle = Circle;