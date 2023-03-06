import "./engine.js"


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
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
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

class PlayerComponent extends Component {
    name = "PlayerComponent"
    start(){
        
        this.transform.x = 250
        console.log("updated x transform")
        this.transform.y = 250
        this.transform.sx = 5
        this.transform.sy = 20
    }
    update(){
        //Update the player position based on input
        if (keysDown["w"]) {
            this.transform.y -= 3;
        }
        if (keysDown["d"]) {
            this.transform.x += 3
        }
        if (keysDown["a"]) {
            this.transform.x -= 3
        }
        if (keysDown["s"]) {
            this.transform.y += 3
        }
    }
    draw(ctx){

    }
}

class PlainScene extends Scene {
    start() {
        

        this.addGameObject(new PlainControllerGameObject())
        this.addGameObject(new PlainDrawGameObject())

        //PLAYER SHIT
        let playerGameObject = new GameObject("PlayerGameObject")
        playerGameObject.addComponent(new PlayerComponent())
         
        let rectangle = new Rectangle()
        playerGameObject.addComponent(rectangle)
        
        this.addGameObject(playerGameObject)
    }
}



let startScene = new StartScene()
let plainScene = new PlainScene()
// let mountainScene = new MountainScene()
// let swampScene = new SwampScene()
// let chapelScene = new ChapelScene()
// let endScene = new EndScene()

// If wanting to view a particular screen, just have it been the only one in this array
// The method call changeScene is broken at the moment and will need to be fixed before transitioning between each
window.allScenes = [plainScene]

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


