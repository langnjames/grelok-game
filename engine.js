import "./SceneManager.js"
import "./Component.js"
import "./Scene.js"
import "./GameObject.js"
import "./Transform.js"
import "./Rectangle.js"




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

let scene = 0;

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
    console.log(e)
    if (e.key == "KeyA") {
        console.log("Up Left")
    }
    if (e.key == "KeyD") {
        console.log("Up Right")
    }
    if (e.key == "KeyW") {
        console.log("Up UpArr")
    }
    if (e.key == "KeyS") {
        console.log("Up DownArr")
    }

}

function keyDown(e) {
    keysDown[e.key] = true
    console.log(e)
    if (e.key == "KeyA") {
        console.log("Down Left")
    }
    if (e.key == "KeyD") {
        console.log("Down Right")
    }
    if (e.key == "KeyW") {
        console.log("Down UpArr")
    }
    if (e.key == "KeyS") {
        console.log("Down DownArr")
    }
    //To prevent scrolling (if needed)
    //This has to be in keyDown, not keyup
    if (e.key == " ") {
        e.preventDefault()
    }
}



// //Getting the mouse position from the canvas
// function getMousePos(canvas, event) {
//     let rect = canvas.getBoundingClientRect()
//     return {
//         x: event.clientX - rect.x,
//         y: event.clientY - rect.y
//     };
// }

// //Helper function for getting the mousePos
// function isInside(pos, rect) {
//     return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
// }

// canvas.addEventListener('click', function (evt) {
//     let mousePos = getMousePos(canvas, evt);
//     if (isInside(mousePos, startRect)) {
//         sceneIndex = 1;
//     }
//     else {
//         sceneIndex = 0;
//     }
// }, false);



function engineUpdate() {
    let scene = SceneManager.getActiveScene()
    if (SceneManager.changedSceneFlag && scene.start) {
        scene.start()
        SceneManager.changedSceneFlag = false
    }

    for (let gameObject of scene.gameObjects) {
        if (gameObject.start && !gameObject.started) {
            gameObject.start()
            gameObject.started = true
        }
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.start &&  !component.started){
                component.start()
                component.started = true
            }
        }
    }

    for(let gameObject of scene.gameObjects){
        for(let component of gameObject.components){
            if(component.update){
                component.update()
            }
        }
    }
}

function engineDraw() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let scene = SceneManager.getActiveScene()

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
