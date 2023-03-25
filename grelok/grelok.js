import "/engine/engine.js"



//---------------------TITLE----------------------//

class StartController extends Component {
    start() {
    }
    update() {
        if (keysDown["Enter"]) {
            SceneManager.changeScene(1)
        }
    }
}

class StartDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "black"
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)

        //Create Title on Page
        ctx.font = "52px Georgia"
        ctx.fillStyle = "White";
        ctx.fillText("Reign of Grelok", 75, (sizeArea - margin) / 2);

        //Subtitle
        ctx.fillStyle = "grey"
        ctx.font = "28px Georgia";
        ctx.fillText("Press Enter to play", 135, 290);
    }
}

class StartControllerGameObject extends GameObject {
    start() {
        this.addComponent(new StartController())
    }
}


class StartDrawGameObject extends GameObject {
    start() {
        this.addComponent(new StartDrawComponent())
    }
}

class StartScene extends Scene {
    start() {
        this.addGameObject(new StartControllerGameObject())
        this.addGameObject(new StartDrawGameObject())
    }
}


//-----------------------------PLAIN-------------------------------//
class PlainController extends Component {
    start() {

        let playerComponent = GameObject.getObjectByName("PlayerGameObject").getComponent("PlayerGameObject")
        let diamondGameObject = new GameObject("DiamondGameObject")
        let diamondComponent = new DiamondComponent()
        diamondComponent.addListener(this)
        diamondComponent.addListener(playerComponent)
        this.addListener(diamondComponent)

    }
    handleUpdate(component, eventName) {
        if (eventName == "CharacterTouchItem") {
            let inventoryGameObject = GameObject.getObjectByName("InventoryGameObject")
            let inventoryComponent = inventoryGameObject.getComponent("InventoryComponent")
            let circle = new Circle("blue")
            inventoryComponent.addComponent(circle)
            circle.transform.x = 550
            circle.transform.y = 70
            circle.transform.sx = 10

        }
    }
}


class PlainDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#67db77" //Light-green
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}


class PlayerComponent extends Component {
    name = "PlayerComponent"
    start() {
        // Creating rectangle component from engine to be used for the player
        let rectangle = new Rectangle()
        this.parent.addComponent(rectangle)
        // Modifies the transforms of the rectangle player component
        this.transform.x = 250
        this.transform.y = 250
        this.transform.sx = 5
        this.transform.sy = 20

    }
    update() {

        // Update player position based on input keys
        if (keysDown["w"]) {
            this.transform.y -= 3; // Upwards
        }
        if (keysDown["d"]) {
            this.transform.x += 3 // Downwards
        }
        if (keysDown["a"]) {
            this.transform.x -= 3 // Left
        }
        if (keysDown["s"]) {
            this.transform.y += 3 // Right
        }

        //Checking for collision with the walls to move to different area
        if (this.transform.y < 10) {
            SceneManager.changeScene(2) // Going North changes to Mountain
        }
        if (this.transform.x < 10) {
            SceneManager.changeScene(3) // Going West changes to Swamp
        }
        if (this.transform.x > 490) {
            SceneManager.changeScene(4) // Going East changes to Chapel
        }
        if (this.transform.y > 490) {
            SceneManager.changeScene(5) // Going South changes to Town
        }
    }
    draw(ctx) {

    }
}

class DiamondComponent extends Component {
    start() {
        let circle = new Circle("blue")
        this.parent.addComponent(circle)
        this.transform.x = 50
        this.transform.y = 50
        this.transform.sx = 5

    }
    update() {
        let playerComponent = GameObject.getObjectByName("PlayerGameObject").getComponent("PlayerComponent")
        let playerX = playerComponent.transform.x
        let playerY = playerComponent.transform.y

        if (Math.abs(this.transform.x - playerX) < 5 && Math.abs(this.transform.y - playerY) < 5) {
            // let inventoryGameObject = GameObject.getObjectByName("InventoryGameObject")
            // let circle = new Circle("blue")
            // inventoryGameObject.addComponent(circle)
            // circle.transform.x = 550
            // circle.transform.y = 70
            // circle.transform.sx = 10

            this.parent.destroy()
            this.updateListeners("CharacterTouchItem")
        }
    }
}

class InventoryComponent extends Component {
    start() {

    }
    handleUpdate(component, eventName) {

    }
    update() {

    }
    draw(ctx) {
        ctx.fillStyle = "Black"
        ctx.fillRect(520, 10, 150, 375)

        // Create Inventory Title
        ctx.font = "20px Georgia"
        ctx.fillStyle = "White";
        ctx.fillText("Inventory", 550, 30);



    }
}

class PlainScene extends Scene {
    start() {
        // Adds a controller Game Object and Component to the scene
        this.addGameObject(new GameObject("ControllerGameObject").addComponent(new PlainController()))
        // Adds a Drawing Game Object and Component to the scene
        this.addGameObject(new GameObject("PlainDrawGameObject").addComponent(new PlainDrawComponent()))
        // Adds a Player Game Object and Component to the scene
        this.addGameObject(new GameObject("PlayerGameObject").addComponent(new PlayerComponent()))
        // Adds an Diamond Game Object and Component to the scene
        this.addGameObject(new GameObject("DiamondGameObject").addComponent(new DiamondComponent()))
        // Adds an Inventory Game Object and Component to the scene
        this.addGameObject(new GameObject("InventoryGameObject").addComponent(new InventoryComponent()))
    }
}

//-------------------------MOUNTAIN SCENE---------------------------//


class MountainSceneDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#5a5c5a" //Grey
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class MountainScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new MountainSceneDrawComponent()))
    }
}

//-------------------------SWAMP SCENE---------------------------//


class SwampSceneDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#142b17" //Dark Green
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class SwampScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new SwampSceneDrawComponent()))
    }
}

//-------------------------CHAPEL SCENE---------------------------//


class ChapelSceneDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#3b2619"
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class ChapelScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new ChapelSceneDrawComponent()))
    }
}

//-------------------------TOWN SCENE---------------------------//


class TownSceneDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#C2B280"
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class TownScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new TownSceneDrawComponent()))
    }
}

//-------------------------END SCENE---------------------------//


class EndSceneDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.fillStyle = "#000000" //Grey
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class EndScene extends Scene {
    start() {
        this.addGameObject(new GameObject().addComponent(new EndSceneDrawComponent()))
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



