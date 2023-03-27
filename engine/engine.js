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
        scene.start()
        SceneManager.changedSceneFlag = false

        let previousScene = SceneManager.getPreviousScene()
        if(previousScene){
            for(let gameObject of previousScene.gameObjects){
                if(gameObject.markedDoNotDestroyOnLoad){
                    scene.gameObjects.push(gameObject)
                }
            }
        }
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

function start(title) {
    document.title = title
    
    function gameLoop() {
        
        engineUpdate()
        engineDraw()
    }

    setInterval(gameLoop, 1000 / 25)
}


//------------------------TESTING SECTION-------------------------//

function test(title, options = []){
    try {
        document.title = title

        let maxFrames = options.maxFrames ? options.maxFrames : 100

        for (let i = 0; i < maxFrames; i++){
            engineUpdate()
            engineDraw()
        }

        if (options.done){
            options.done(ctx)
        }
    } catch (exception){
        failtest()

        throw exception;
    }
}

function failTest(){
    ctx.font = ""
    ctx.fillText("❌", 9, 20)
    console.log("An exception was thrown")
}

let verboseDebug = true

function passTest(description){
    if(verboseDebug){
        console.log("Passed test: " + description)
    }
}

function passTests() {
    ctx.font = ""
    ctx.fillText("", 9, 20)
    console.log("Called passTests")
}

function assert(boolean, description = ""){
    if(!boolean){
        failTest(description)
    }
    else {
        if(description)
            passTest(description)
    }
}

window.start = start
window.test = test
window.assert = assert
window.passTests = passTests
window.keysDown = keysDown
