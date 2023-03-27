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
 */

class Transform extends Component {
  name = "Transform"
  x = 0
  y = 0
  sx = 1
  sy = 1
  r = 0


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

window.Transform = Transform;