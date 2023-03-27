/**
 * Scene class for engine/game
 * Scenes are containers for game objects
 */
class Scene{
    /** Holds list of game objects in a scene */
    gameObjects = []

    /**
     * Adds the camera to the scene
     * @param {Color} fillStyle color for the camera, default: magenta
     */
     constructor(fillStyle = "magenta"){
         this.addGameObject(new GameObject("CameraGameObject").addComponent(new Camera(fillStyle)))
     }

    /**
     * Adds a game object to a scene
     * will be changing this code at some point
     * @param {GameObject} gameObject game object being added
     * @param {Vector2} translate intial translation value, defaults to (0,0)
     * @param {Vector2} scale initial scale value, defaults to (1,1)
     * @param {Number} rotation intiatial rotation value, defaults to 0
     * @returns return reference to the game object created
     */
    addGameObject(gameObject, translate = Vector2.zero, scale = Vector2.one, rotation = 0){
        this.gameObjects.push(gameObject)

        /** Get transforms from vector2 component */ 
        gameObject.transform.x = translate.x
        gameObject.transform.y = translate.y
        gameObject.transform.sx = scale.x
        gameObject.transform.sy = scale.y
        gameObject.transform.r = rotation

        /** Starts the game object if it hasn't been started */
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }

        return gameObject
    }

    /**
     * Adds a new game object to scene with a pre-determined transform
     * @param {GameObject} gameObject game object being added
     * @param {Transform} transform transform for the game object, default: new transform
     */
    addGameObjectTransform(gameObject, transform = new Transform()){
        this.gameObjects.push(gameObject)
        gameObject.transform = transform
    }
}

/** This adds Scene to the global namespace to be called in different areas */
window.Scene = Scene