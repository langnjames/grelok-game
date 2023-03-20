class Scene{
    gameObjects = []

    addGameObject(gameObject){
        this.gameObjects.push(gameObject)
        if(gameObject.start && !gameObject.started){
            gameObject.started = true
            gameObject.start()
        }
    }
}

window.Scene = Scene