import "./SceneManager.js"
import "./Component.js"
import "./Scene.js"
import "./GameObject.js"
import "./Transform.js"
import "./Rectangle.js"
import "./Line.js"
import "./Circle.js"
import "./Vector2.js"
import "./Camera.js"
import "./Text.js"


//-----------------------------INPUT HANDLING---------------------------------//

let canvas = document.querySelector("#canv");
let ctx = canvas.getContext("2d");

let keysDown = []
let mouseX
let mouseY

//Key Event Listeners
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

document.addEventListener("mousedown", mouseDown);
document.addEventListener("mouseup", mouseUp);
document.addEventListener("mousemove", mouseMove);

function mouseDown(e) {
    //console.log("mouseDown: " + e.clientX + " " + e.clientY)
}
function mouseUp(e) {
    //console.log("mouseUp: " + e.clientX + " " + e.clientY)
}
function mouseMove(e) {
    //console.log("mouseMove: " + e.clientX + " " + e.clientY)
}

function keyUp(e) {
    keysDown[e.key] = false
}

function keyDown(e) {
    keysDown[e.key] = true
    //To prevent scrolling (if needed)
    //This has to be in keyDown, not keyup
    if (e.key == " ") {
        e.preventDefault()
    }
}

//-----------------------------GAME LOOP---------------------------------//

//  Updating the engine every game loop
function engineUpdate() {

    // Getting a reference to the active scene being displayed
    let scene = SceneManager.getActiveScene()
    if (SceneManager.changedSceneFlag && scene.start) {
        let camera = scene.gameObjects[0]
        scene.gameObjects = []
        scene.gameObjects.push(camera)

        /** Loops through the objects from the previous scene
         * to see which ones need to be preserved
         */
        let previousScene = SceneManager.getPreviousScene()
        if(previousScene){
            for(let gameObject of previousScene.gameObjects){
                if(gameObject.markedDoDestroyOnLoad){
                    scene.gameObjects.push(gameObject)
                    for (let component of gameObject.component){
                        if(component.onSceneLoad){
                            component.onSceneLoad()
                        }
                    }
                }
            }
        }

        scene.start()
        SceneManager.changedSceneFlag = false
    }

    // If a game object can be started, start it!
    for (let gameObject of scene.gameObjects) {
        if (gameObject.start && !gameObject.started) {
            gameObject.start()
            gameObject.started = true
        }
    }

    // If a component can be started, start it!
    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start &&  !component.started){
                component.start()
                component.started = true
            }
        }
    }

    // Handling destroy here
    let keptGameObjects = []
    for(let gameObject of scene.gameObjects){
        if(!gameObject.markedForDestroy){
            keptGameObjects.push(gameObject)
        }
    }
    scene.gameObjects = keptGameObjects;

    // Calling update for all components that have an update function
    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }
}


//  Drawing everything for the scene every game loop
function engineDraw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let scene = SceneManager.getActiveScene()
        
    // looping through all the components and drawing each of them
    for (let gameObject of scene.gameObjects) {
        for (let component of gameObject.components) {
            if (component.draw) {
                component.draw(ctx)
            }
        }
    }
}

/**
 * Start the game and set the browser title
 * @param {String} title The title of the browser window
 */
function start(title) {
    document.title = title
    
    function gameLoop() {
        
        engineUpdate()
        engineDraw()
    }

    setInterval(gameLoop, 1000 / 25)
}


window.start = start

window.engineUpdate = engineUpdate
window.engineDraw = engineDraw

window.keysDown = keysDown
