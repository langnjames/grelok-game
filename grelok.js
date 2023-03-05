//---------------------TITLE----------------------//

class StartController extends Component {
    start() {
    }
    update() {
        if (keysDown["Enter"]) {
            SceneManager.changeScene(1);
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
        ctx.fillRect(0, 0, canvas.width, canvas.height);
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


//---------------------PLAIN----------------------//
class PlainController extends Component {
    start() {

    }
    update() {

    }
}

class PlainDrawComponent extends Component {
    draw(ctx) {
        // Defining sizes for area to draw
        let margin = 10;
        let sizeArea = 500;

        // Draw the background & foreground box
        ctx.fillStyle = "#303030" //Color of the background
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#67db77" //Light-green
        ctx.fillRect(margin, margin, sizeArea - margin, sizeArea - margin)
    }
}

class PlainControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class PlainDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class PlainScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}

//---------------------MOUNTAIN----------------------//

class MountainController extends Component {
    start() {

    }
    update() {

    }
}

class MountainDrawComponent extends Component {
    draw(ctx) {

    }
}

class MountainControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class MountainDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class MountainScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}


//---------------------SWAMP----------------------//

class SwampController extends Component {
    start() {

    }
    update() {

    }
}

class SwampDrawComponent extends Component {
    draw(ctx) {

    }
}

class SwampControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class SwampDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class SwampScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}


//---------------------TOWN----------------------//

class TownController extends Component {
    start() {

    }
    update() {

    }
}

class TownDrawComponent extends Component {
    draw(ctx) {

    }
}

class TownControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class TownDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class TownScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}

//---------------------CHAPEL----------------------//

class ChapelController extends Component {
    start() {

    }
    update() {

    }
}

class ChapelDrawComponent extends Component {
    draw(ctx) {

    }
}

class ChapelControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class ChapelDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class ChapelScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}

//---------------------END----------------------//

class EndController extends Component {
    start() {

    }
    update() {

    }
}

class EndDrawComponent extends Component {
    draw(ctx) {

    }
}

class EndControllerGameObject extends GameObject {
    start() {
        this.addComponent(new PlainController())
    }
}


class EndDrawGameObject extends GameObject {
    start() {
        this.addComponent(new PlainDrawComponent())
    }
}

class EndScene extends Scene {
    start() {
        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())
    }
}

let startScene = new StartScene()
let plainScene = new PlainScene()
let mountainScene = new MountainScene()
let swampScene = new SwampScene()
let chapelScene = new ChapelScene()
let endScene = new EndScene()

SceneManager.addScene(startScene)
SceneManager.addScene(plainScene)
SceneManager.addScene(mountainScene)
SceneManager.addScene(swampScene)
SceneManager.addScene(chapelScene)
SceneManager.addScene(endScene)

//players inv
const playersInventory = [1, 2, 3]


const player = {
    playPosX: 0,
    playPosY: 0,
    playInv: getInventory(playersInventory)

}


function getInventory(pInv) {
    return pInv
}



//         case 1:
//             drawScreen("#67db77") // Light Green
//             break;
//         case 2:
//             drawScreen("#5a5c5a") // Grey
//             break;
//         case 3:
//             drawScreen("#142b17") // Dark Green
//             break;
//         case 4:
//             drawScreen("#b36f0b") // Orange
//             break;
//         case 5:
//             drawScreen("#3b2619") // Brown
//             break;
//         case 6:
//             drawScreen("#17110d") // Dark Grey
//             break;
//         case 7:
//             drawScreen("#000000") // Black
//             break;
//     }


