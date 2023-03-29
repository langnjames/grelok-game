/** Imports engine and engine-level files for usage in game */
import "/engine/engine.js"

/**
 * ----------------------------TITLE-------------------------------
 */
class StartController extends Component {
    start() {
    }
    update() {
        /** If user presses enter key then we start the game 
         * and change the scene to the first scene of the game
         */
        if (keysDown["Enter"]) {
            SceneManager.changeScene(1)
        }
    }
}

class StartScene extends Scene {
    /** Calls constructor for camera to display grey background */
    constructor(){
        super("#303030")
    }
    start() {
        /** Creates Controller Game Object and  Component for Start Scene */
        this.addGameObject(new GameObject("StartControllerGameObject").addComponent(new StartController()))
         /** Creates Text Game Object and  Component for Start Scene */
        this.addGameObject(new GameObject("StartTitleGameObject").addComponent(new Text("Reign of Grelok", "white", "52px Georgia")), new Vector2(75, 245))
         /** Creates Text Game Object and  Component for Start Scene */
        this.addGameObject(new GameObject("StartSubtitleGameObject").addComponent(new Text("Press Enter to Play", "grey", "28px Georgia")), new Vector2(135, 290) )
    }
}


//-----------------------------PLAIN-------------------------------//
class PlainController extends Component {
    start() {

        /** Intializes PlayerComponent in this Controller in order to listen for handlers */
        let playerComponent = GameObject.getObjectByName("PlayerGameObject").getComponent("PlayerComponent")
        playerComponent.addListener(this)

        /** Initializes DiamondComponent in this Controller in order to listen for handlers */
         let diamondComponent = GameObject.getObjectByName("DiamondGameObject").getComponent("DiamondComponent")
        diamondComponent.addListener(this)

    }
    handleUpdate(component, eventName) {
        if (eventName == "PlayerTouchItem") {
            let inventoryComponent = GameObject.getObjectByName("InventoryGameObject").getComponent("InventoryComponent")
            
        }

        if (eventName == "PlayerNorth") {
            SceneManager.changeScene(2)
        }
        if (eventName == "PlayerWest") {
            SceneManager.changeScene(3)
        }
        if (eventName == "PlayerEast") {
            SceneManager.changeScene(4)
        }
        if (eventName == "PlayerSouth") {
            SceneManager.changeScene(5)
        }

    }
}

class PlayerComponent extends Component {
    name = "PlayerComponent"
    start() {
        // Creating rectangle component from engine to be used for the player
        let rectangle = new Rectangle()
        this.parent.addComponent(rectangle)
        this.parent.doNotDestroyOnLoad()
        // Modifies the transforms of the rectangle player component
        this.transform.x = 250
        this.transform.y = 250
        this.transform.sx = 5
        this.transform.sy = 20

    }
    onSceneLoad(){
        if(this.transform.y < 10){
            this.transform.y = 480
        }
        if(this.transform.x < 10){
            this.transform.x = 480 
        }
        if(this.transform.x > 490){
            this.transform.y = 20
        }
        if(this.transform.x > 490){
            this.transform.x = 10
        }
    }
    update() {

        // Update player position based on input keys
        if (keysDown["w"]) {
            this.transform.y -= 5; // Upwards
        }
        if (keysDown["d"]) {
            this.transform.x += 5 // Downwards
        }
        if (keysDown["a"]) {
            this.transform.x -= 5 // Left
        }
        if (keysDown["s"]) {
            this.transform.y += 5 // Right
        }

        //Checking for collision with the walls to move to different area
        if (this.transform.y < 10) {
            this.updateListeners("PlayerNorth") // Going North changes to Mountain
        }
        if (this.transform.x < 10) {
            this.updateListeners("PlayerWest") // Going West changes to Swamp
        }
        if (this.transform.x > 490) {
            this.updateListeners("PlayerEast") // Going East changes to Chapel
        }
        if (this.transform.y > 490) {
            this.updateListeners("PlayerSouth") // Going South changes to Town
        }
    }
}

class DiamondComponent extends Component {
    name = "DiamondComponent"
    start() {
        let circle = new Circle("blue")
        this.parent.addComponent(circle)
        this.transform.x = 50
        this.transform.y = 50
        this.transform.sx = 5
        //this.parent.doNotDestroyOnLoad()
    }
    update() {
        // let playerComponent = GameObject.getObjectByName("PlayerGameObject").getComponent("PlayerComponent")
        // let playerX = playerComponent.transform.x
        // let playerY = playerComponent.transform.y

        // if (Math.abs(this.transform.x - playerX) < 5 && Math.abs(this.transform.y - playerY) < 5) {
        

            
        //     this.updateListeners("PlayerTouchItem")
        // }
    }
}

class InventoryComponent extends Component {
    name = "InventoryComponent"
    start() {
        // this.parent.doNotDestroyOnLoad()
        // GameObject.getObjectByName("InventoryBackgroundGameObject").doNotDestroyOnLoad()
        // GameObject.getObjectByName("InventoryTitleGameObject").doNotDestroyOnLoad()
        let inventoryItems = []
    }
    handleUpdate(component, eventName) {
        if (eventName == "PlayerTouchItem") {
            let inventoryComponent = GameObject.getObjectByName("InventoryGameObject").getComponent("InventoryComponent")
            
        }
    }
    update() {
        // let diamondGameObject = GameObject.getObjectByName("DiamondGameObject")
        // let diamondComponent = diamondGameObject.getComponent("DiamondComponent")
        
        
    }
}

class PlainScene extends Scene {
    /** Calls constructor for camera to display grey background */
    constructor(){
        super("#303030")
    }
    start() {
        /** Draws background of the game onto the scene */
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#67db77")), new Vector2(250, 250), new Vector2(500,500))
        /** Adds a controller Game Object and Component to the scene */ 
        this.addGameObject(new GameObject("ControllerGameObject").addComponent(new PlainController()))
        // /** Adds a Player Game Object and Component to the scene */
         this.addGameObject(new GameObject("PlayerGameObject").addComponent(new PlayerComponent()))
        // /** Adds an Diamond Game Object and Component to the scene */
         this.addGameObject(new GameObject("DiamondGameObject").addComponent(new DiamondComponent()))
        // /** Adds an Inventory Game Object and Component to the scene */
         this.addGameObject(new GameObject("InventoryGameObject").addComponent(new InventoryComponent()))
         this.addGameObject(new GameObject("InventoryBackgroundGameObject").addComponent(new Rectangle("black")), new Vector2(575, 250), new Vector2(125, 500))
         this.addGameObject(new GameObject("InventoryTitleGameObject").addComponent(new Text("Inventory", "white", "20px Georgia")), new Vector2(530, 30))


        
    }
}

//-------------------------MOUNTAIN SCENE---------------------------//

class GemComponent extends Component{
    start(){

    }
}

class MountainScene extends Scene {
    constructor(){
        super("#303030")
    }
    start() {
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#5a5c5a")), new Vector2(250, 250), new Vector2(500,500))
        this.addGameObject(
            new GameObject("GemGameObject")
            .addComponent(new GemComponent())
            .addComponent(new Circle()), new Vector2(75, 125), new Vector2(5, 5))

        

    }
}

//-------------------------SWAMP SCENE---------------------------//
class SwampScene extends Scene {
    constructor(){
        super("#303030")
    }
    start() {
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#142b17")), new Vector2(250, 250), new Vector2(500,500))
        this.addGameObject(new GameObject("DrawTowerGameObject").addComponent(new Rectangle("grey")), new Vector2(10,300), new Vector2(100, 300))
        this.addGameObject(new GameObject("DrawTreeGameObject").addComponent(new Rectangle("#211405")), new Vector2(200, 200), new Vector2(15, 75))
    }
}

//-------------------------CHAPEL SCENE---------------------------//
class ChapelScene extends Scene {
    constructor(){
        super("#303030")
    }
    start() {
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#3b2619")), new Vector2(250, 250), new Vector2(500,500))
    }
}

//-------------------------TOWN SCENE---------------------------//
class TownScene extends Scene {
    constructor(){
        super("#303030")
    }
    start() {
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#C2B280")), new Vector2(250, 250), new Vector2(500,500))
    }
}

//-------------------------END SCENE---------------------------//
class EndScene extends Scene {
    constructor(){
        super("#303030")
    }
    start() {
        this.addGameObject(new GameObject("DrawBackgroundGameObject").addComponent(new Rectangle("#000000")), new Vector2(250, 250), new Vector2(500,500))
    }
}



let startScene = new StartScene()
let plainScene = new PlainScene()
let mountainScene = new MountainScene()
let swampScene = new SwampScene()
let chapelScene = new ChapelScene()
let townScene = new TownScene()
let endScene = new EndScene()

// If wanting to view a particular screen, just have it been the only one in this array
// The method call changeScene is broken at the moment and will need to be fixed before transitioning between each
window.allScenes = [startScene, plainScene, mountainScene, swampScene, chapelScene, townScene, endScene]



