/**
 * The transform component.
 * This stores the position of the game object in 2D (x,y),
 * the scale of the game object (sx,sy),
 * and the rotation of the component, r).
 * 
 * All game objects have a transform. If more than one transform 
 * are attached to a game object, only the one and index 0 will
 * be used. It is best practice not to have multiple Transform instances
 * on a game objects.
 * 
 * TLDR, each GameObject has one single transform and stores positional information
 * If something needs to have a different transform, it should be a different Game Object
 */
class Transform extends Component {
  /** Name of the component, defaults to transform */
  name = "Transform"
  /** X pos of the transform, default is 0 */
  x = 0
  /** Y pos of the transform, default is 0 */
  y = 0
  /** X axis scale of the transform, default is 1 */
  sx = 1
  /** Y axis scale of the transform, default is 1 */
  sy = 1
  /** Rotation value of the transform, default is 0 */
  r = 0

  /**
   * This function is used mostly to help lines
   * Sets x, y, scale, and rotate for a start and end location
   * @param {Number} startX X's starting location for new transform
   * @param {Number} startY Y's starting location for new transform
   * @param {Number} endX X's ending location for new transform
   * @param {Number} endY Y's ending location for new transform
   * @returns returns the transform
   */
  static fromTo(startX, startY, endX, endY) {
    let t = new Transform()
    t.x = (startX + endX) / 2
    t.y = (startY + endY) / 2
    let length = Math.sqrt((startX - endX) ** 2 + (startY - endY) ** 2)
    t.sx = length / 2
    t.sy = 1
    t.r = Math.atan2((endY - startY), (endX - startX));

    return t;
  }
}

/** This adds transform to the global namespace to be called in different areas */
window.Transform = Transform;