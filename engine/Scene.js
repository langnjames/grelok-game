class Scene{
    gameObjects = []

    // constructor(fillStyle = "magenta"){
    //     this.addGameObject(new GameObject("CameraGameObject").addComponent(new Camera(fillStyle)))
    // }

    addGameObject(gameObject){
        this.gameObjects.push(gameObject)
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
    }
}

window.Scene = Scene